//const express = require('express')
import express from  "express";
const router = express.Router()
import userControl from '../controller/userController.js';
// 요청에 따른 응답 시간 (=성능측정 용도)
const timeLog = (req, res, next) => {
  console.log('Time: ', Date.now())
  next()
}
router.use(timeLog)

// User(연락처) 생성
router.get('/user/:id', userControl.findOneUser);   // 동적파라미터
router.post('/', userControl.createUser);

//Users(연락처) 조회
router.get('/users', userControl.findAllUsers);
router.delete('/users', userControl.removeAllUsers);
router.delete('/user/:id', userControl.removeUser);

//연락처 수정
router.put('/user', userControl.updateUser);
export default router;