import App from './app';
import HomeController from './controllers/homeController';
import UserController from './controllers/userController';

const app = new App(
  [
      new HomeController(),
      new UserController()
  ],
  8001  
);

app.listen();