import { configureStore } from "@reduxjs/toolkit";
import UiSlice from "../slice/UISlice";
import ToastSlice from "../slice/ToastSlice";

export const store = configureStore({
    reducer:{
        toast:ToastSlice,
        ui:UiSlice
    }
})

export type IRootState = ReturnType<typeof store.getState>