// ESM(ES6 Module, Ecma Script Moduel) import, export
// CommonJS Module : require , module.exprots 또는 exports

//↓ 여기 한줄만 바꿔줘라 ↓
//const express = require('express')
import express from "express";

const app = express()

app.get('/', function (req, res) {
  res.send('GET 요청!')
});
app.post('/', function (req, res) {
    res.send('POST 요청!')
});
app.put('/', function (req, res) {
    res.send('PUT 요청!')
});
app.delete('/', function (req, res) {
    res.send('DELETE 요청!')
});
app.listen(3000)