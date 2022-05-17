import express from 'express';

const application = express();

application.get('/', (req, res) => {res.send("Hello, Drop out of college. You are not smart")});

application.listen(3000,()=>{console.log("Listening...")});