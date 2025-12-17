//define ur model schema;
import mongoose from "mongoose";
const todoSchema=mongoose.Schema({
    todo:{
        type:String,
        required:true,
        unique:true
    }
    }
)
//we r creating collections with name called todos with todoSchema
const todoCollection =mongoose.model("todos",todoSchema)
export default todoCollection;