"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
const index_1 = __importDefault(require("./routes/index"));
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // 템플릿 엔진 설정
app.use('/', index_1.default);
app.listen(8001, () => {
    console.log('8001번 포트에서 서버 대기중입니다!');
});
