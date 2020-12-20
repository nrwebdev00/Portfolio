import path, { dirname } from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import colors from 'colors';
import morgan from 'morgan';
import dotenv from 'dotenv';

//config Imports
import db from './config/db.js';
//middleware Imports

//Routes Imports

dotenv.config();
db();

const app = express();

//Logging DEV
if(process.env.NODE_ENV === "development"){ app.use(morgan("dev"));}

//Parser
app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

//Mount Routes

//Static Folder path
const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

//Error Middleware


const PORT = 5000

app.listen(PORT, console.log(`Server is running on ${PORT}, and is in ${process.env.NODE_ENV} mode.`.brightYellow.underline.bold))