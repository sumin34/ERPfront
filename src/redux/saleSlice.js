import { createSlice } from "@reduxjs/toolkit";


const saleSlice = createSlice({
    name:'sale',
    initialState:{
        list:[],
    },
    reducers:{

    }
});

export const getSaleItemDB = (data) => async (dispatch) =>{

}

export default saleSlice;