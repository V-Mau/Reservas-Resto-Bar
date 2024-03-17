import {configureStore} from '@reduxjs/toolkit';
import userSlice from './usersSlice';



const store = configureStore({
    reducer : {
        actualUser: userSlice 
    },
});

export default store