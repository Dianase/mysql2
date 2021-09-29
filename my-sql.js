import mysql from "mysql"

const connection = mysql.createConnection({
  host: "db.bayleen.com",
  user: "swecc04",
  password: "BuildingSoFlo2021",
  database: "swecc04"
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

getStudents('Toribio')