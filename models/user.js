import mongoose,{Schema} from "mongoose"

import {createHmac} from "crypto"
const userSchema = new Schema({
    name:{
        type:String,
    },
    email:{
        required:true,
        type:String,
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

    userSchema.methods = {
        authenticate(password){
            return this.password == this.encryptPassword(password)
        },
        encryptPassword(password){
            if(!password) return;
            try {
                return createHmac('sha256','1234567').update(password).digest('hex')
            } catch (error) {
                console.log(error);
            }
        }
    }
    userSchema.pre('save',function(next){
        this.password = this.encryptPassword(this.password)
        next()
    })
export default mongoose.model("User",userSchema)