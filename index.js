// ESM(ES6 Module, Ecma Script Moduel) import, export
// CommonJS Module : require , module.exprots 또는 exports

//↓ 여기 한줄만 바꿔줘라 ↓
//const express = require('express')
import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express()

import userRouter from "./routes/userRouter.js";

//console.log(process.env.NODE_ENV); // NODE_ENV 환경변수
// middleware
app.use(express.json()); // json 데이터를 express 에서 처리 가능
app.use("/" , userRouter);

app.listen(3000)