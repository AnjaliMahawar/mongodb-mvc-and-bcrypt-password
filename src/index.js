///console.log('hello')
const express=require('express');
const app =express();

const { about_app } = require('moongose/models');
const { adminRoute } = require('./routes/admin/adimRoute');
const { registerRoute } = require('./routes/register');

require('dotenv').config();

app.use(express.json())
app.use(adminRoute)
app.use('/api',registerRoute)


let port =process.env.PORT;
  app.listen(port,()=>{
    console.log('server is running on port '+port)
  })