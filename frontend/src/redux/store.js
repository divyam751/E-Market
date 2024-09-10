import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import contactSlice from "./features/contactSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    contact: contactSlice,
  },
});

export default store;
