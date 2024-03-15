// * Paso 5 = Router (userRoute)
import { Router } from 'express';
import { createUser, getAllUsers, getUserById, userLogin,  } from '../controllers/userController';

const userRoute = Router();

userRoute.get('/', getAllUsers);
userRoute.get('/:id', getUserById);
userRoute.post('/register',createUser );
userRoute.post('/login', userLogin);

export default userRoute;