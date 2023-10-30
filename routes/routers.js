import express from 'express'
import EmployeeController from '../controllers/EmployeeController.js'

const route = express.Router()

route.get('/getAllEmployees', EmployeeController.getAllEmployees)
route.get('/getEmployee', EmployeeController.getEmployee)
route.get('/check-in', EmployeeController.checkIn)
route.get('/check-out', EmployeeController.checkOut)

export default route