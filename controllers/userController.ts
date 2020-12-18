import Controller from '../interface/controller.interface';
import { Router } from 'express';

class UserController implements Controller
{
    public path ='';
    public router = Router();
    constructor(){

    }

}

export default UserController;