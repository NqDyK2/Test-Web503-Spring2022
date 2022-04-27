import mongoose,{Schema} from "mongoose"

const productSchema = new Schema({
    name:{
        type:String,
        minlength:5,
        maxlength:32,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    desc:{
        type:String
    }

},{timestamps:true})

export default mongoose.model('Products', productSchema)