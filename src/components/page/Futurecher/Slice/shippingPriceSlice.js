import { createSlice } from "@reduxjs/toolkit";

const perseShipingPrice = localStorage.getItem("ShippingPrice");
const shippingPrice = JSON.parse(perseShipingPrice);

const perseTotalCost = localStorage.getItem("TotalCost");
const totalPrice = JSON.parse(perseTotalCost);
const shippingPriceInitialState = {
  shipping: shippingPrice || 0,
  totalCost: totalPrice || 0
};

const shippingPriceSlice = createSlice({
  name: "shipping",
  initialState: shippingPriceInitialState,
  reducers: {
    addToShippingPrice: (state, action) => {
      const shippingPrice = action.payload;
      if (shippingPrice) {
        localStorage.setItem("ShippingPrice", JSON.stringify(shippingPrice));
      }
      const perseShippingPrice = localStorage.getItem("ShippingPrice");
      const getShippingPrice = JSON.parse(perseShippingPrice);
      state.shipping = getShippingPrice || 0;
    },

//     getShippingPrice: (state) => {
//       const perseShippingPrice = localStorage.getItem("ShippingPrice");
//       const getShippingPrice = JSON.parse(perseShippingPrice);
//       state.shipping = getShippingPrice || 0;
//     },

    calculatetTotalTotalCost: (state , action) => {
      const subTotalPrice = action.payload
      const shippingPrice = state.shipping
      const totalCost = parseInt(subTotalPrice) + parseInt(shippingPrice)
      localStorage.setItem("TotalCost" , JSON.stringify(totalCost))
      const parseTotalCost = localStorage.getItem("TotalCost")
      const getTotalCost = JSON.parse(parseTotalCost)
      state.totalCost = getTotalCost

    }
  },
});

export const { addToShippingPrice , calculatetTotalTotalCost } = shippingPriceSlice.actions;
export default shippingPriceSlice.reducer;
