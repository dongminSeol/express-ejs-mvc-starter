import * as bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import expressLayouts  from 'express-ejs-layouts';
import Controller from './interface/controller.interface';
import logger from './middleware/logger.middleware';

class App {
  public app: express.Application;
  public port: number;

  constructor(controllers: Controller[], port: number) {
    this.app = express();
    this.port = port;

    this.initializeEjs();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }

  private initializeMiddlewares() {
    // body-parser를 설정. 
    // v.3.0 부터 사용 안함
    this.app.use(bodyParser.json());
    this.app.use(logger)
  }

  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }
  private initializeEjs(){

    this.app.use(expressLayouts);

    // 템플릿 엔진 설정
    this.app.set('views',path.join(__dirname,'views'));
    this.app.set('view engine','ejs');

    //  ejs-layout 설정
    //this.app.set('layout', 'shared/layout');
    this.app.set('layout', 'shared/_layout');
    this.app.set("layout extractScripts", true);
    
  }
}

export default App;
