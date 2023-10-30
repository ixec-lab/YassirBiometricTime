import db from '../config/db.js'
import {v1 as uuidv1} from 'uuid'

class EmployeeModel
{

    /* constructor in case we want to add new Employee feature */
    constructor(first_name,last_name,dateCreated,department)
    {
        this.first_name = first_name
        this.last_name = last_name
        this.uuid = uuidv1()
        this.dateCreated = dateCreated
        this.department = department
    }


     /* using classical db query since we have a simple app */
   static async getAllUsers()
    {
        const sql = "SELECT uuid, first_name, last_name, dateCreated, department FROM employees"
        var [users] = await db.query(sql)
        console.log(users)
        return users
    }

    static async getUser(date)
    {
        const sql = "SELECT uuid, first_name, last_name, dateCreated, department FROM employees WHERE DATE(dateCreated) = ?"
        var [user] = await db.query(sql,[date])
        return user
    }

    static async checkIn(id,comment)
    {
        const type = "IN"
        const sql = "INSERT INTO checks(employee,type,comment) VALUES (?,?,?)"
        const inserted = await db.query(sql,[id,type,comment])

        return inserted
    }

    static async checkOut(id,comment)
    {
        const type = "OUT"
        const sql = "INSERT INTO checks(employee,type,comment) VALUES (?,?,?)"
        const inserted = await db.query(sql,[id,type,comment])

        return inserted
    }

    static async saveWorkingTime(employee,date,time)
    {
        const sql = "INSERT INTO working_time(employee,date,time) VALUES (?,?,?)"
        const [row] = await db.query(sql,[employee,date,time])

        console.log(row);
    }

}

export default EmployeeModel;