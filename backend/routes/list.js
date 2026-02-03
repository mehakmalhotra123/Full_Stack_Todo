import { Router } from "express";
import { User } from "../models/user.models.js";
import { List} from "../models/list.models.js";
const router = Router();

// create 
router.post("/addTask", async (req, res) => {
    try {
        const { title, body, email } = req.body;

        const existingUser = await User.findOne({ email });
         //  handle user not found
    if (!existingUser) {
      return res.status(404).json({
        message: "User not found. Please register first."
      });
    }
          // If user found 
            const list = new List({ title, body, user: existingUser._id });
            await list.save();
         //  push reference to user
            existingUser.list.push(list);
            await existingUser.save()

            res.status(201).json({
                success: true,
                list
            });
      
    } catch (error) {
       res.status(500).json({
        message : error.message
       });
    }

})

// update 
router.put("/updateTask/:id", async (req ,res)=>{
    try {
        const {title, body} = req.body;
       const {id} = req.params;
       //update task directly
       const updateTask = await List.findByIdAndUpdate(
        id,
        {title, body},
        {new: true} // return updated document
       )
      if(!updateTask){
        return res.status(404).json({
            message: "task not found"
        }) ;
    }
    res.status(200).json({
        success:true,
    task: updateTask    });

    } catch (error) {
      res.status(500).json({
      message: error.message
    }); 
    }
})

// delete 
router.delete("/deleteTask/:id", async (req, res)=>{
    try {
        const {email} = req.body;
        const {id} = req.params;
        // find user
        const user = await User.findOne({email})

        if(!user){
            return res.status(404).json({
                message: " User not Fonud"
            });
        }

        // detelte task
        const deletedTask = await List.findByIdAndDelete(id);

        if(!deletedTask){
            return res.status(404).json({
                message: "tsak not found"
            });
        }

        // remove task reference from user
        user.list.pull(id);
        await user.save();

         res.status(200).json({
      success: true,
      message: "Task deleted successfully"
    });

    } catch (error) {
          res.status(500).json({
      message: error.message
    });
    }
})

// get All taske of User
router.get("/getTask/:id", async (req, res)=>{
    try {
        const {id} = req.params;

        const tasks =  await List.find({user: id}).sort({createdAt: -1});
          if(tasks.length == 0){
            return res.status(200).json({
                message: "No Tasks"
            })
          }
        res.status(200).json({
            success:true,
            tasks
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
})
export default router;