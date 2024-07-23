import { createSlice } from '@reduxjs/toolkit'
import Igame from '../models/IGame';

export const gameReducer = createSlice({
    name: 'gameInfo',
    initialState:{juego:null} as Igame,
    reducers: {    
      modAction: (state:any,action: {type: string, payload: {payload:any , type: string}})  => {       
          state[action.payload.type] = action.payload.payload;            
      },      
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { modAction } = gameReducer.actions
  
  export default gameReducer