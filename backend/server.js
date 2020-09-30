import express from 'express';

// Config
const app = express();
const port = process.env.PORT || 9000;

// Middleware

// DB Config

// Routes
app.get('/', (req,res)=>res.status(200).send('hello world'));

// Listen
app.listen(port, ()=>console.log('Listening on localhost:${port}'));