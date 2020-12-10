import express, {Request, Response, NextFunction} from 'express';
import path from 'path';

const app = express();

import indexRouter from './routes/index';

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');  // 템플릿 엔진 설정

app.use('/',indexRouter);


app.listen(8001,()=>{  // 포트번호 설정
  console.log('8001번 포트에서 서버 대기중입니다!');
});