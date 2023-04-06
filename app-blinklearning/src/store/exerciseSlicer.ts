
import { createSlice} from '@reduxjs/toolkit';
import { RootState } from '.';

import {typeAnswer} from '../types/interfaces'
export interface IExercState {
  finish: boolean; 
  answers:  typeAnswer[],
  answerOk: number
 
}

export const initialState: IExercState = {
  finish:false,
  answers:[],
  answerOk:0
 
};

export const exerciseSlice = createSlice({
  name: 'excercise',
  initialState,
  reducers: {
    finishExercise: (state) => {
      state.finish=true;
      
    },
    setAnswer : (state, action) => {
      
      // eslint-disable-next-line prefer-const
      let temp = state.answers;
      const id = temp.findIndex (item=>item.question===action.payload.question)
      if (id!==-1)
          {temp[id].answer=action.payload.answer
          console.log ('lo encontre ', id)}
      else
        {temp.push(action.payload)
        console.log('no lo encontre')}
      state.answers=[...temp]
      console.log(temp)
    },
    
  },
});

export const finish = (state: RootState) => state.reducer.exercise?.finish;
export const answers = (state: RootState) => state.reducer.exercise.answers;

export const { finishExercise, setAnswer } =  exerciseSlice.actions;

export default exerciseSlice.reducer;