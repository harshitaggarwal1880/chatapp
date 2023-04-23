const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const userRoutes = require("./routes/userRoutes")
const messageRoutes = require("./routes/messageRoutes")

const app = express();

const socket = require("socket.io")

require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);
app.use("/message", messageRoutes);

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Database Connect Sucessfully")
}).catch((err)=>{
    console.log(err.message)
})


const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server running at http://localhost:${process.env.PORT}`);
})

const io = socket(server,{
    cors:{
        origin: process.env.ORIGIN ,
        Credential: true,
    },
})

global.onlineUsers = new Map();

io.on("connection" , (socket)=>{
    global.chatSocket = socket;
    socket.on("add-user", (userId)=>{
        onlineUsers.set(userId, socket.id);
    })

    socket.on("send-msg", (data)=>{
        const sendUserSocket = onlineUsers.get(data.to);
        if(sendUserSocket){
            socket.to(sendUserSocket).emit("msg-recieve", {message: data.message, from: data.from});
        }
    })

})


