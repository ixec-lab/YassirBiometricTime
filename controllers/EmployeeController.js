import EmployeeModel from "../models/EmployeeModel.js";
import Checkers  from "../helpers/Checkers.js";
import Carbon from "../helpers/Carbon.js";

class EmployeeController
{
    /**
     * get all users information 
    */
    static async getAllEmployees(req,res)
    {
        var users = await EmployeeModel.getAllUsers()

        res.send(users)
    }

    /**
     * filter users by creation date 
    */
    static async getEmployee(req,res)
    {
        var date = req.query.date
        if (date && !isNaN(new Date(date)))
        {
            var user = await EmployeeModel.getUser(date)
            res.send(user)
        }
        else
        {
            const message = {
                "message": "ERROR: invalide date"
            }
            
            res.json(message)
        }
            
    }

    static async checkIn(req,res)
    {
        const token = req.query.token
        const uuid = req.query.uuid
        const comment = req.query.comment

        const id = await Checkers.checkToken(uuid,token)
        const checkedPerDay = await Checkers.checkPerDay(id,"IN")

        if(id && !checkedPerDay){
            // save the time
            const Isaved = await EmployeeModel.checkIn(id,comment)
            console.log(Isaved)
            
            if(Isaved[0].affectedRows)
            {
                const message = {
                    "message": "You have been checked in successfully"
                }
    
                res.json(message)
            }


        }
        else
        {
            const message = {
                "message": "ERROR: can't perform checks operations"
            }
            res.json(message)
        }
    }

    static async checkOut(req,res)
    {
        const token = req.query.token
        const uuid = req.query.uuid
        const comment = req.query.comment

        const id = await Checkers.checkToken(uuid,token)
        const checkedPerDay = await Checkers.checkPerDay(id,"OUT")

        if(id && !checkedPerDay){
            // save the time
            const Isaved = await EmployeeModel.checkOut(id,comment)
            console.log(Isaved)

            if(Isaved[0].affectedRows)
            {
                const time = await Checkers.computeWorkTime(id,Carbon.getFullDate())

                EmployeeModel.saveWorkingTime(id,Carbon.getFullDate(),time)

                const message = {
                    "message": "You have been checked out successfully"
                }

                res.json(message)
            }
        }
        else
        {
            const message = {
                "message": "ERROR: can't perform checks operations"
            }
            res.json(message)
        }
    }
}

export default EmployeeController