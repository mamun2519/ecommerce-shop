import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initistialProductState = {
      product: {},
      loading: false,
      error: ''
}
export const fetchSingleProduct = createAsyncThunk('/products/fetch' , (id) =>{
      if(id){
            return axios.get(`https://ecommerce-shop-server.vercel.app/product/get/${id}`)
            .then((res) => res.data)
      }
      
})


export const singleProductSlice = createSlice({
      name: 'product',
      initialState: initistialProductState,
      extraReducers: (builder) =>{
            builder.addCase(fetchSingleProduct.pending , (state) =>{
                  state.loading = true

            })
            builder.addCase(fetchSingleProduct.fulfilled , (state , action)=> {
                  state.loading = false
                  state.product = action.payload
                  state.error = ''
            })
            builder.addCase(fetchSingleProduct.rejected , (state , action)=> {
                  state.loading = false
                  state.product = {}
                  state.error = action.error.message
            })
      }
})

export default singleProductSlice.reducer