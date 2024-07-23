import { createSlice } from '@reduxjs/toolkit'
import {ICurrentInfoWeight} from '../models/IInfoWeight';

export const weightInfoReducer = createSlice({
  name: 'weightInfoReducer',
  initialState: {currentValue:{name:null,date:null, weight:null}, listValues:null, generalListValues:null}  as ICurrentInfoWeight,
  reducers: {    
    wirAction: (state:any,action: {type: string, payload: {payload:any , type: string}})  => {
      let field: string[] = action.payload.type.split('.') ;
      
        state["currentValue"][field[0]] = action.payload.payload;            
        //state["currentValue.name"] = action.payload.payload;            
    },
    wirAction2: (state:any,action: {type: string, payload: {payload:any , type: string}})  => {            
        state["listValues"] = action.payload.payload;            
    },
    setGeneralList: (state:any,action: {type: string, payload: {payload:any }})  => {            
      state["generalListValues"] = action.payload.payload;            
  },
  },
})

// Action creators are generated for each case reducer function
export const { wirAction, wirAction2, setGeneralList } = weightInfoReducer.actions

export default weightInfoReducer