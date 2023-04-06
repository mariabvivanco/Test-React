
import { createSlice} from '@reduxjs/toolkit';
import { RootState } from '.';


export interface IDragState {
  isDragging : boolean;
 
}

export const initialState: IDragState = {
  isDragging:false,
   
};

export const dragSlice = createSlice({
  name: 'drag',
  initialState,
  reducers: {
    startDrag: (state) => {
      state.isDragging=true;
    },
    endDrag: (state) => {
      state.isDragging=false;
    },
    
    
  },
});

export const isDragging = (state: RootState) => state.reducer.drag.isDragging;

export const { startDrag, endDrag } =  dragSlice.actions;

export default dragSlice.reducer;