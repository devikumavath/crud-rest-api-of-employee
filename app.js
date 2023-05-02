const express = require('express')
const mongoose = require('mongoose')
const dburl = 'mongodb://127.0.0.1/employeeData'

const app = express()

app.use(express.json())


const employeeRouter = require('./routers/employeerouter')

app.use('/employee' , employeeRouter)

mongoose.connect(dburl, {useNewUrlParser:true})
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
      console.log("failed to connect database", err);
    });
    


// mongoose.connect(dburl , {useNewUrlParser:true})
// const con = mongoose.connection

// con.on('open' , () => {
//     console.log("database connected"); 
// })

// mongoose
//   .connect("mongodb://127.0.0.1/employeeData")
//   .then(() => {
//     console.log("database connected");
//   })
//   .catch((err) => {
//     console.log("failed to connect database" , err);
//   });





app.listen(8000 , () => {
    console.log("listening on port 8000");
})
