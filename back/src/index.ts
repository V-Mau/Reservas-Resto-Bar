// * paso 2 = index(entryPoint)
import {PORT} from './config/envs';
import app from './server';
import "reflect-metadata"
import { AppDataSource } from './config/data-source';

AppDataSource.initialize()
    .then(() => {
        console.log("Conectado a la base de datos con exito!");
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        })
    })
    .catch((error) => console.log(error))




