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
           state.userData = action.payload 
        },
        setUserBooking: (state, action ) => {
            state.userBooking = action.payload
        },
        
    },
});
export const {setUserData , setUserBooking } = userSlice.actions
export default userSlice.reducer;