import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isLoading:false,
    error: null,
    courses: [],
}

export const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        courseLoadingStart: (state) => {
            state.isLoading= true
        },
        courseLoadingSuccess: (state, action) => {
            state.isLoading = false
            state.courses = action.payload
        },
        courseLoadingFailure: (state,action) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export const {courseLoadingFailure,courseLoadingStart,courseLoadingSuccess} = courseSlice.actions
export default courseSlice.reducer