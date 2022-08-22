import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../productSlice'
import singleProductReducer from '../singleProductSlice'
export default configureStore({
  reducer: {
      products: productReducer,
      product: singleProductReducer
  },
})