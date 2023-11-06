const express = require('express');
const router = express.Router();
// const jwt = require('jsonwebtoken');
// const bodyParser=require('body-parser');
const app = express();
// const indexRouter = require("./routes/index");
// const userRouter = require("./routes/user");
// const RsigninRouter = require("./routes/Rsignin");
const webSocket = require('./socket');
// const pingRouter = require('./routes/ping');
const port = 3000;


// app.use(express.json())
// app.use(bodyParser.raw())
// app.use(bodyParser.text())
// app.use(express.urlencoded({extended:false}))
// app.use('/', indexRouter);
// app.use('/user', userRouter);
// app.use('/signin', RsigninRouter);
// app.use('/ping',pingRouter)

const server=app.listen(port, () => {
    console.log(`Express 서버가 http://localhost:${port}에서 동작 중입니다.`);
  });
webSocket(server)