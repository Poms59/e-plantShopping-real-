import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CreateSlice.jsx';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default store;
