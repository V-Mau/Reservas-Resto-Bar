// * Paso 4 = indexRoute.
import {Router} from 'express'
const indexRoute = Router()

import userRoute from './userRoute';
import bookingRoute from './bookingRoute';




indexRoute.use('/users', userRoute);
indexRoute.use('/booking',bookingRoute);

export default indexRoute;