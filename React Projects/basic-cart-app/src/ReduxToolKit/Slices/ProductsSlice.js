import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
export const fetchProduct = createAsyncThunk(
    'productsSlice/fetchProduct',
    async() => {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        return data
    }
)
export const productsSlice = createSlice({
    initialState: [] ,
    name : 'productsSlice',
    reducers : {},
    extraReducers :(builder) => {
        builder.addCase(fetchProduct.fulfilled,(state,action) => {
            return action.payload
        })
    }
})
// eslint-disable-next-line no-empty-pattern
export const {} = productsSlice.actions
export default productsSlice.reducer