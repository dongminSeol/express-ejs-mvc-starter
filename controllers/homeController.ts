import { Router,Request,Response,NextFunction } from 'express';
import Controller from '../interface/controller.interface'
class HomeController implements Controller
{
    public path = '/home';
    public views = '../views/home';
    public router = Router();

    constructor(){
        this.initializeRouters();
    }
    private initializeRouters(){
        //this.router.get(this.path, this.index);
        this.router.all('/', this.index);
        this.router.get( this.path, this.index);
        this.router.get(`${this.path}/info`, this.info);
    }
    private index = async(req: Request,res: Response, next: NextFunction)=>{
        const model = {
            title :'homeController > index',
            description:'index 페이지'
        }
        res.render( `${this.views}/index`,model);
    }
    private info = async(req: Request,res: Response, next: NextFunction)=>{
        const model = {
            title :'homeController > info',
            description:'info 페이지'
        }
        res.render( `${this.views}/info`,model);
    }

}

export default HomeController;