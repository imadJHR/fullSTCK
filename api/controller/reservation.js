import ErrorHandler from '../error/error.js'
import {Reservation} from "../models/reservationShema.js"




export const sendReservation = async (req , res , next ) =>{
   const  {firstName , lastName , email , phone , date , time} = req.body
   if(!firstName || !lastName || !email || !phone || !date || !time) {
    return next (new ErrorHandler("Please fill all the fields" , 400));
   }
   try{
        await Reservation.create(firstName , lastName , email , phone , date , time);
        res.status(200).json(
            {
            succes : true ,
            message : "Reservation sent successfully"
        }
    )
   } catch (error){
    const validationErrors = Object.values(error.errors).map(
        (err) => err.message
    );
    return next(new ErrorHandler(validationErrors.join(","), 400));

   }
}