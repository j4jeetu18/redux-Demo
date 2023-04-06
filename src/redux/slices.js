import { createSlice } from "@reduxjs/toolkit";


export let heirarchialSlice=createSlice({
    name:"family",
    initialState:{
        value:"changed by noOne",
        activatingElem:"action.payload"
    },
    // initialState:"changed by noOne",
    reducers:{
        changeState:(state,action)=>{
            state.value="changed By "+action.payload
            state.activatingElem=action.payload
        }
    }
})

export let {changeState}= heirarchialSlice.actions

export default heirarchialSlice.reducer