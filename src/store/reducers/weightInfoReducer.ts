import { createSlice } from '@reduxjs/toolkit'
import IInfoWeight from '../models/IInfoWeight';

export const weightInfoReducer = createSlice({
  name: 'weightInfoReducer',
  initialState: { } as IInfoWeight,
  reducers: {    
      midvalue: (state:any,action: {type: string, payload: {payload:any , type: string}})  => {
      let field: string[] = action.payload.type.split('.') ;
      
        state[field[0]] = action.payload.payload;            
    }
  },
})

// Action creators are generated for each case reducer function
export const { midvalue } = weightInfoReducer.actions

export default weightInfoReducer