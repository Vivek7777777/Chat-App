// npm start to run this file
// const express = require('express');
// const cors = require('cors');

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";


dotenv.config();
const port = process.env.PORT;
const api_key = process.env.API_KEY;
// console.log(port);
// console.log(api_key);

const app = express();
app.use(express.json());
app.use(cors({origin: true}));



app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;    

    try{
        const response = await axios.put(
            `https://api.chatengine.io/users/`,
            {
                username: username,
                secret: username,
                firse_name: username
            },
            {
                headers: {"private-key": `${api_key}`}
            }
        )
        return res.status(response.status).json(response.data)
    }
    catch(err){
        return res.status(err.response.status).json(err.response.data)
    }

});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
