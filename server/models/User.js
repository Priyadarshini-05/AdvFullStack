import mongoose from 'mongoose';

const useeSchema = new mongoose.Schema({
    username:String,
    password:String,
})
export default mongoose.model('User',useeSchema);