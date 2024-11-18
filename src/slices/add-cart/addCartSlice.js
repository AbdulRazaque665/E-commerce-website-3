import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
   name: "counter",
   initialState,
   reducers:{
    addtocart: (state) => {
        state.value +=1
    }
   }
})

export const { addtocart} = counterSlice.actions
export default counterSlice.reducer