import mongoose from "mongoose"
import validator from "validator"

const reservationSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true,
        minLength : [3," First name must be at least 3 characters"],
        maxlength : [30, "First name must be at most 30 characters"],

        },
        lastName : {
            type: String,
            required: true,
            minLength : [3," last name must be at least 3 characters"],
            maxlength : [30, "last name must be at most 30 characters"],
    
            },
            email:{
                type: String,
                required: true,
                alidate: [validator.isEmail, 'Please enter a valid email'],
            },
            phone:{
                type: String,
                required: true,
                minLength : [11,"phone number must be at least 11 digits"],
                maxlength : [11, "phone number must be at least 11 digits"]
            },
            time : {
                type: String,
                required : true
            },

})
export const Reservation = mongoose.model("Resevation",reservationSchema)
