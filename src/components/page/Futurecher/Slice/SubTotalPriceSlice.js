import { createSlice } from "@reduxjs/toolkit";
const perseSubTotal = localStorage.getItem("SubTotalPrice");
const subtotal = JSON.parse(perseSubTotal);

const perseShipingPrice = localStorage.getItem("ShippingPrice");
const shippingPrice = JSON.parse(perseShipingPrice);

const subTotalInitialState = {
  subTotal: subtotal || 0,
  shipping: shippingPrice || 0
  
};

const subTotalPriceSlice = createSlice({
  name: "subTotal",
  initialState: subTotalInitialState,
  reducers: {
    addToSbTotal: (state, action) => {
      const cart = action.payload;
      const totalPrice = cart?.map((c) => c.totalPrice);

      if (cart.length > 0) {
        const reducer = (accumulator, curr) => accumulator + curr;
        const subtotalPrice = totalPrice?.reduce(reducer);
        localStorage.setItem("SubTotalPrice", JSON.stringify(subtotalPrice));
      } else {
        localStorage.setItem("SubTotalPrice", JSON.stringify(0));
      }
      const perseSubTotal = localStorage.getItem("SubTotalPrice");
      const subtotal = JSON.parse(perseSubTotal);
      state.subTotal = subtotal;
    },
  },
  getToSubTotal: (state) => {
      const perseCart = localStorage.getItem("SubTotalPrice");
      const getCart = JSON.parse(perseCart);
      state.cart = getCart || 0;
    },

    addToShippingPrice: (state , action) => {
      const shippingPrice = action.payload
      if(shippingPrice){
        localStorage.setItem("ShippingPrice", JSON.stringify(shippingPrice));
    
      }
      const perseShippingPrice = localStorage.getItem("ShippingPrice");
      const getShippingPrice = JSON.parse(perseShippingPrice);
      state.shipping = getShippingPrice || 0
     
    }
    


});

export const { addToSbTotal , getToSubTotal , addToShippingPrice} = subTotalPriceSlice.actions;
export default subTotalPriceSlice.reducer;
