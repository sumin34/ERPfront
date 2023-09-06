const { configureStore } = require("@reduxjs/toolkit");
const { default: saleSlice } = require("./saleSlice");

const store = configureStore({
    reducer:{
        sale: saleSlice.reducer
    }
})