import { createSlice,configureStore } from '@reduxjs/toolkit';

const intialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: intialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});


const initialAuthState = { isAuthenticated: false };

const AuthSlice = createSlice({
  name: "Auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated=true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  }
})


const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    Auth: AuthSlice.reducer,
  }
});



export const counterAction = counterSlice.actions;
export const authAction = AuthSlice.actions;

export default store;
