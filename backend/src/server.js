import express from "express"
import http from "http"
import { Server } from "socket.io"

const app = express()
const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        credentials: true
    }
})

io.on("connection", (socket) => {
    console.log("User connected: ", socket.id);
    socket.on("join-room", (roomId) => {
        socket.join(roomId);
        console.log(`${socket.id} joined room ${roomId}`);
    })

    socket.on("disconnect", ()=> {
        console.log("User disconnected:", socket.id);
    })
})

server.listen(5000, () => {
    console.log("Server running on port 5000");
})