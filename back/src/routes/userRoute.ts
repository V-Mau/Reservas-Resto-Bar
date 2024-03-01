// * Paso 5 = Router (userRoute)
import {Router} from 'express'
import { getAllUsers, getUserById, userLogin, userRegister }from '../controllers/userController';

const userRoute = Router();



userRoute.get('/', getAllUsers);
userRoute.get('/:id',getUserById);
userRoute.post('/register',userRegister);
userRoute.post('/login',userLogin)


export default userRoute;