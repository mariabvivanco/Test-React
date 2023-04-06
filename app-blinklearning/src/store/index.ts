//Combine existing reducers and generate application state.

import { configureStore, combineReducers } from '@reduxjs/toolkit';


import exerciseReducer from '../store/exerciseSlicer';
import dragReducer from '../store/dragSlicer';


const store = configureStore({
  reducer: {
    reducer: combineReducers({ exercise: exerciseReducer, drag:dragReducer}),   
  },
 
});

export type RootState = ReturnType<typeof store.getState>;

export default store;