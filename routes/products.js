import { Router } from "express";
import Products from "../models/products"
const router = Router()

router.get("/products", async (req, res) => {
    try {
        const product = await Products.find().sort({createdAt:-1}).limit(20)
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm"
        })
    }
})
router.post("/product", async (req, res) => {
    try {
        const product = await new Products(req.body).save()
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được sản phẩm"
        })
    }
})
router.patch("/product/:id", async (req, res)=>{
    try {
        const product = await  Products.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Không sửa được sản phẩm"
        })
    }
})
router.delete("/product/:id", async (req,res) =>{
    try {
        const product = await  Products.findOneAndDelete({_id:req.params.id})
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Không xóa được sản phẩm"
        })
    }
})
router.get("/product/:id", async (req,res) =>{
    try {
        const product = await Products.findOne({_id:req.params.id})
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm"
        })
    }
})

export default router