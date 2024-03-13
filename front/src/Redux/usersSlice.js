import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    userData: {},userBookigs: []
};
    

export const userSlice = createSlice ({
    name: "actualUsers",
    initialState,
    reducers: {
        login: (state, action) => {
           state.userData = action.payload 
        },
        logout: (state, action ) => {
            state.userBookigs = action.payload
        }
        
    }
})
export const { login, logout } = userSlice.actions
export default userSlice;