import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    userData: {},
    userBooking: []
};

    

export const userSlice = createSlice ({
    name: "actualUser",
    initialState,
    reducers: {
        setUserData: (state, action) => {
            console.log("Datos de usuario establecidos:", action.payload); 
           state.userData = action.payload 
           console.log('CONTENIDO DE USERDATA:', state.userData.userBooking);
        },
        setUserBooking: (state, action ) => {
            console.log("Reservas de usuario establecidas:", action.payload);
            state.userBooking = action.payload
        },
        
 
    },
});
export const {setUserData , setUserBooking } = userSlice.actions
export default userSlice.reducer;