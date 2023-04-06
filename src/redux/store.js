import { configureStore } from "@reduxjs/toolkit";
import heirarchyReducer from "./slices";


export let store=configureStore({
    reducer:{
        heirarchyState:heirarchyReducer
    }
})

