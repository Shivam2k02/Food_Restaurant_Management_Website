import mongoose from "mongoose";
export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://great:tyagishivam@atlascluster.odkqhwd.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}
