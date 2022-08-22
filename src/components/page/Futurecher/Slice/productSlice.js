import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initistialProductState = {
      products: [],
      loading: false,
      error: ''
}

export const fetchProduct = createAsyncThunk('/products/fetch' , () =>{
      return axios.get("http://localhost:5000/product/get")
      .then((res) => res.data)
})
export const productsSlice = createSlice({
      name: 'products',
      initialState: initistialProductState,
      extraReducers: (builder) =>{
            builder.addCase(fetchProduct.pending , (state) =>{
                  state.loading = true

            })
            builder.addCase(fetchProduct.fulfilled , (state , action)=> {
                  state.loading = false
                  state.products = action.payload
                  state.error = ''
            })
            builder.addCase(fetchProduct.rejected , (state , action)=> {
                  state.loading = false
                  state.products = []
                  state.error = action.error.message
            })
      }
      

})

// export const {} = productsSlice.actions
export default productsSlice.reducer