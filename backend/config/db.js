import mongoose from 'mongoose';


const db = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
            console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold)
        } catch (error){
            console.error(`Error: ${error.message}`.brightRed.underline.bold)
        }
    }

export default db;