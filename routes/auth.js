import { Router } from "express";
import User from "../models/user"
const router = Router()

router.post("/registed", async(req,res) =>{
    try {
        const user = await new User(req.body).save()
        res.json({
            user:{
                _id:user._id,
                name:user.name,
                email:user.email
            }
        })
    } catch (error) {
        res.status(400).json({
            message:"Không đăng ký được"
        })
    }
})
router.post("/login", async (req,res) =>{
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email}).exec();
        if(!user){
            res.status(400).json({
                message:"Không có user"
            })
        }
        if(!user.authenticate(password)){
            res.status(400).json({
                message:"Sai MK"
            })
        }
        res.json({
            user:{
                _id:user._id,
                name:user.name,
                email:user.email
            }
        })
    } catch (error) {
        
    }
})

export default router
