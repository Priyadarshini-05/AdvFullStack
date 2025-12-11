import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB Connected successfully`);
    }catch (error) {+
        console.error(`MonoDB connection error:`, error);
        process.exit(1);
    }
}