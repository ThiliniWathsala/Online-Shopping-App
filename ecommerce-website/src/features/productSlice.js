import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


const initialState = {
    item: [],
    status: null,
    error: null
}


export const productFetch = createAsyncThunk(
    "products/productFetch",    // ACTION creator - products -> name of the slice, productFetch -> action creator name, return current state
    async() => {
        try{
            const response = await axios.get("http://localhost:5000/server/product")
            return response?.data;
        }catch(e){
            console.log(e);
        }

    }    //PAYLOAD creator -> return payload, we can access by action.payload
)

const productSlice = createSlice({   // this provides action creater and reducer together 
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: {
        [productFetch.pending]:(state, action) =>{     //extraReducer object contains Key Values pair -> key - [productFetch.pending] , value - (state,action)=>{}
            state.status = "pending"
        },
        [productFetch.fulfilled]: (state, action)=>{
            state.status = "successful";
            state.item = action.payload;
        },
        [productFetch.rejected]: (state, action) => {
            state.status = "rejected";
            // state.error = action.payload
        }
    }

})


export default productSlice.reducer;