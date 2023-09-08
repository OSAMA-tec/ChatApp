// Import the express library
const express = require('express');
const cors = require('cors');
const {Server} = require('socket.io');
const http=require("http")
const app=express()
app.use(cors());
const port = 3000;


const server=http.createServer(app)
const io=new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        "methods":["GET","POST","DELETE","PUT"]
    }
})

io.on("connection",(socket)=>{
    console.log("User Connected",socket.id);

    socket.on("disconnect",()=>{
        console.log("User Disconnected",socket.id)
    })
})



// Start the server
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
