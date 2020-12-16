import * as bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import expressLayouts  from 'express-ejs-layouts';
import Controller from './interface/controller.interface';

class App {
  public app: express.Application;
  public port: number;

  constructor(controllers: Controller[], port: number) {
    this.app = express();
    this.port = port;

    //this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeEjs();
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }

  // private initializeMiddlewares() {
  //   this.app.use(bodyParser.json());
  // }

  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }
  private initializeEjs(){

    // 템플릿 엔진 설정
    this.app.set('views',path.join(__dirname,'views'));
    this.app.set('view engine','ejs');

    //  ejs-layout 설정
    this.app.use(expressLayouts);
    this.app.set('layout', 'shared/_layout');
    this.app.set("layout extractScripts", true);
    
  }
}

export default App;
