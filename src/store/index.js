import { configureStore } from '@reduxjs/toolkit'
import CourseRoducer from '../slice/course'
import MentorReducer from '../slice/mentor'
import UserReducer from '../slice/user'

export const store = configureStore({
  reducer: {
    course: CourseRoducer,
    mentor: MentorReducer,
    user: UserReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
})