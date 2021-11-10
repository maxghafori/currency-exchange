import { configureStore } from '@reduxjs/toolkit';
import exchangeStates from './exchangeStates';

const store = configureStore({
  reducer: {
    exchangeState: exchangeStates,
  },
});

export default store;
