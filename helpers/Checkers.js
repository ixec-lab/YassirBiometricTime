import db from '../config/db.js'
import Carbon from './Carbon.js'

class Checkers 
{
    static async checkToken(uuid,token)
    {
        const sql = "SELECT id FROM employees where uuid = ? AND TOKEN = ?" 
        const [row] = await db.query(sql, [uuid,token])

        if (row.length === 1)
            return row[0].id
        else
            return false
    }

    static async checkPerDay(id,type)
    {
        const sql = "SELECT id FROM checks where employee = ? AND type = ? AND DATE(checkdate) = ?"

        const [row] = await db.query(sql, [id,type,Carbon.getFullDate()])

        if (row.length === 1)
            return true
        else
            return false
    }

    static async computeWorkTime(id,date)
    {
        const sql = "SELECT TIMEDIFF((SELECT checkdate from checks where employee = ? AND type = 'OUT' AND DATE(checkdate) = ?),(SELECT checkdate from checks where employee = ? AND type = 'IN' AND DATE(checkdate) = ?)) as workTime"

        const [row] = await db.query(sql, [id,date,id,date])

        console.log(row[0].workTime)
        if(row)
            return row[0].workTime
    }
}

export default Checkers