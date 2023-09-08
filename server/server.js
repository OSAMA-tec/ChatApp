// Import the express library
const express = require('express');
const cors = require('cors');
const {Server} = require('socket.io');
const http=require("http")
app.use(cors());
const port = 3000;

const app=express()

const server=http.createServer(app)
const io=new Server(server,{
    cors:{
        origin:"*",
        "methods":["GET","POST","DELETE","PUT"]
    }
})

io.on("connection",(socket)=>{
    console.log(socket.io);

    socket.io("disconnect",()=>{
        console.log("User Disconnected",socket.io)
    })
})



// Start the server
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
