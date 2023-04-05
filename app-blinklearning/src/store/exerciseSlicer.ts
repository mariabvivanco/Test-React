
import { createSlice} from '@reduxjs/toolkit';
import { RootState } from '.';
export interface IExercState {
  finish: boolean; 
 
}

export const initialState: IExercState = {
  finish:false,
  
 
};

export const exerciseSlice = createSlice({
  name: 'excercise',
  initialState,
  reducers: {
    finishExercise: (state, action) => {
      state.finish=true;
    },
  },
});

export const finish = (state: RootState) => state.reducer.exercise?.finish;

export const { finishExercise } =  exerciseSlice.actions;

export default exerciseSlice.reducer;