import {configureStore} from '@reduxjs/toolkit';
import userSlice from './usersSlice';



const store = configureStore({
    reducer : {
        actualUsers: userSlice.reducer
    }
})

export default store