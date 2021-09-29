import mysql from "mysql"
import dotenv from "dotenv"

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE
})

const getStudents = (lastName) => {
  const query = `SELECT * FROM students WHERE last_name = "${lastName}"`

  connection.query(query, (error, results) =>{
    if(error){
      console.error(error)
    }
    console.log(results)
  })
}

// getStudents('Toribio')

const insertStudent = (studentid, firstname, lastname, email, phone, admissionsdate) =>{
  const query = `INSERT INTO students(student_id, first_name, last_name, email, phone, admission_date) 
  VALUES(${studentid}, "${firstname}", "${lastname}", "${email}", "${phone}", "${admissionsdate}")`

  connection.query(insertStudent, (error, results) =>{
    if(error){
      console.log(error)
    }
    console.log(results)
  })
}
insertStudent(3333, 'Albert', 'Einstein', 'aeinstein@rockmail.com', '1800callagenius', "2021-09-29")

connection.end()
