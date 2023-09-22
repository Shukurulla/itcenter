import { configureStore } from "@reduxjs/toolkit";
import CourseRoducer from "../slice/course";
import MentorReducer from "../slice/mentor";
import UserReducer from "../slice/user";
import UiReducer from "../slice/ui-slice";

export const store = configureStore({
  reducer: {
    course: CourseRoducer,
    mentor: MentorReducer,
    user: UserReducer,
    ui: UiReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
