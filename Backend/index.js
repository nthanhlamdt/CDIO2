import express from "express";
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./dataBase/connectToMongoDB.js";
import dotenv from "dotenv";
import { app, server } from "./socket/socket.js";
import friendRoutes from './routes/friend.routes.js'
import groupRoutes from './routes/group.routes.js'

dotenv.config();

const port = 5000;
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);
app.use("/api/friend", friendRoutes);
app.use("/api/group", groupRoutes);

server.listen(port, () => {
  connectToMongoDB();
  console.log(`http://localhost:${port}/`);
});
