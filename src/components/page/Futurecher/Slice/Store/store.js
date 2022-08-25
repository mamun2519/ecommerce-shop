import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../productSlice'
import singleProductReducer from '../singleProductSlice'
import createUserReducer from '../createUserSlice'
import cartReducer from '../cartSlice'
import subtotalReducer from '../SubTotalPriceSlice'
export default configureStore({
  reducer: {
      products: productReducer,
      product: singleProductReducer,
      user: createUserReducer,
      cart:  cartReducer,
      subTotal: subtotalReducer
  },
})