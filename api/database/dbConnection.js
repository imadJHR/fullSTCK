import mongoose from "mongoose"


export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL,{
        dbName : "RESTAURANT"
    }).then(()=>{
        console.log("Connected to MongoDB");
    }).catch(err=> {
        console.log(`Error connecting to MongoDB ${err}`);
    })
}