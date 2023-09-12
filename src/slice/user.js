import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    users: [],
    error: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userLoadingStart: state => {
            state.isLoading = true
        },
        userLoadingSuccess: (state, action) => {
            state.isLoading = false
            state.users = action.payload
        },
        userLoadingFailure: state => {
            state.isLoading = false,
            state.error = 'error'
        }
    }
})

export const { userLoadingStart,userLoadingFailure,userLoadingSuccess } = userSlice.actions
export default userSlice.reducer