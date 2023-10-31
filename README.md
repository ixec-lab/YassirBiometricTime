# Simple Nodejs  Biometric Time Clock Restful API

The main goal from this API is to secure the way we handle the time scheduling
This small system act like an RFID based system

## DOC

**available Endpoints :**

1. ```/getAllEmployees```
2. ```/getEmployee```
3. ```/check-in```
4. ```/check-out```

```/getAllEmployees``` <br /> <br /> 
   ```GET``` : find all employees information's

```/getEmployee``` <br /> <br /> 
   ```GET``` ```/?``` ```date``` : filter employees information's based on creation date

```/check-in``` <br /> <br /> 
   ```GET``` ```/?``` ```uuid``` : uuid of an employee <br />
   ```GET``` ```/?``` ```token``` : secret token of an employee (this token is made to protect from tampring) <br />
   ```GET``` ```/?``` ```comment``` : comment of an employees can be added in both check in/out <br />

```/check-out``` <br /> <br />
    Same exact thing as ```/check-in``` endpoint params

### Mysql installation and setup
Mysql package can be found and installable from npm repo:  ```npm i mysql2``` <br />
Can be configured easily with <br />
```js
import mysql from 'mysql2'
const db = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export default db
```
can be usable anywhere by exporting it.


### Docker setup
to run the full app make sure : <br />
1. To configure .env file (check .env.example) <br /> 
2. To have db.sql in database directory <br /> 

To build the image and run the containers run: ```docker-compose up --build```

