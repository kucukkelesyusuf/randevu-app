import { createSlice } from "@reduxjs/toolkit";


export interface IUi{

    loading:boolean;

}

const initialState :IUi = {
loading:false
}

const UiSlice = createSlice({
name:"ui",
initialState,
reducers:{

    Pending(state){
       state.loading = true;
    },
    OK(state){
       state.loading = false;
    }
    

}
})

export const { Pending,OK } = UiSlice.actions
export default UiSlice.reducer