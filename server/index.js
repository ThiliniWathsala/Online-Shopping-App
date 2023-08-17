const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());  // word as middle ware to connect client
app.use(express.json());  // to access req body


const serverRouter = require('./auraServer/routes/app');

app.use("/server",serverRouter)


const port = 5000;


app.listen(port,
    console.log(`server logged in port ${port}` ))