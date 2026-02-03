import { Router } from "express";
import { User } from "../models/user.models.js";
import bcrypt from "bcryptjs";

const router = Router();

// sign in  
router.post("/register", async (req, res) => {
    try {
        const { email, username, password } = req.body;
        // HASH PASSWORD BEFORE SAVE
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            email,
            username,
            password: hashedPassword,
        });

        await user.save();
        res.status(201).json({
            success: true,
            user: {
                _id: user._id,
                email: user.email,
                username: user.username
            } // ❌ don't send password back
        });

    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
});


router.post("/login", async (req, res) => {
    try {
        // const { password } = res.body;
        // check user exists
        const user = await User.findOne({
            email: req.body.email
        });
        // THIS is where "register first" goes
        if (!user) {
            res.status(400).json({ message: "Please sign up first" });
        }
        // copare password 
        const isMatch = await bcrypt.compare(
           req.body.password,
             user.password);

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }
        const {password , ...others} =  user._doc;
        res.status(200).json({
            others,
            success: true,
            message: "Login successful"
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
})
export default router;

//.save() = save an existing document
//.create() = create + save in one step