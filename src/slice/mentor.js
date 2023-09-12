import {createSlice} from '@reduxjs/toolkit'
const initialState={
    isLoading: false,
    error: null,
    mentors: []
}

export const mentorSlice = createSlice({
    initialState,
    name: "mentor",
    reducers :{
        mentorLoadingStart: state => {
            state.isLoading = true
        },
        mentorLoadingSuccess: (state,action) => {
            state.isLoading = false
            state.mentors = action.payload
        },
        mentorLoadingFailure: state => {
            state.isLoading = false
            state.error = 'error'
        }
    }
})
export const {mentorLoadingStart,mentorLoadingFailure,mentorLoadingSuccess} = mentorSlice.actions
export default mentorSlice.reducer