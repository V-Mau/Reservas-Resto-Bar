// * Paso 4 = indexRoute.
import {Router} from 'express'
import bookingRoute from './bookingRoute';
import userRoute from './userRoute';


const indexRoute = Router()



indexRoute.use('/users', userRoute);
indexRoute.use('/bookings',bookingRoute);

export default indexRoute;