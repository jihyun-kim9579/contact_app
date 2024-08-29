// 이미 생성되어있는 기본 코드는 모두 삭제!!
// json 포맷을 node.js에서 불러올때는 assert {type : 'json'}을 삽입해야 한다.
import dotenv from "dotenv";
dotenv.config();
import config from "../config/config.json" assert {type:'json'};
const env = process.env.NODE_ENV || "development";
const configEnv = config[env]; // username , database , password , host .. 여기안에 다 있음.
console.log(env);

// import User from "./User.js";

import { Sequelize } from "sequelize";
const sequelize = new Sequelize (configEnv.database, configEnv.username, configEnv.password, {
  host: configEnv.host,
  dialect: configEnv.dialect,
  port : 3306,
  logging: (msg) => console.log(msg)
});

//DB 연결 테스트
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

// Model - Table 동기화 (Synchroniazation) == > Promises 객체를 반환 : 비동기
await sequelize.sync({ force: true }).then(() => {
  console.log('All models were synchronized successfully.'); // 메세지는 출력되었으나 users 테이블은 아직 생성 전
}).catch((error) => {
  console.log('Error Occured' + error);
});


// DB 정의
const db = {};
// 객체.속성 = "값"
import User from "./User.js";

db.sequelize = sequelize; //시퀄라이즈 인스턴스 (DB 접속정보)
db.User = User;
User.init(sequelize); // User 모델의 컬럼, 자료형 --> MariaDB에 생성

export default db;









