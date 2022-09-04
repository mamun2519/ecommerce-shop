import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../productSlice'
import singleProductReducer from '../singleProductSlice'
import createUserReducer from '../createUserSlice'
import cartReducer from '../cartSlice'
import subtotalReducer from '../SubTotalPriceSlice'
import shppingPriceReducer from '../shippingPriceSlice'
import clientSecretReducer from '../clientScritSlice.js'
import manageOrderReducer from '../manageOrderSlice'
import userReducer from '../userSlice'
import adminsReducer from '../getallAdminSlice'
export default configureStore({
  reducer: {
      products: productReducer,
      product: singleProductReducer,
      user: createUserReducer,
      cart:  cartReducer,
      subTotal: subtotalReducer,
      shipping: shppingPriceReducer,
      clientSecret: clientSecretReducer,
      orders: manageOrderReducer,
      users: userReducer,
      admins: adminsReducer 
  },
})