import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../productSlice'
import singleProductReducer from '../singleProductSlice'
import createUserReducer from '../createUserSlice'
export default configureStore({
  reducer: {
      products: productReducer,
      product: singleProductReducer,
      user: createUserReducer
  },
})