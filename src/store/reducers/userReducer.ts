import { createSlice } from '@reduxjs/toolkit'

export const userReducer = createSlice({
  name: 'userReducer',
  initialState: {
    info:{
        name: null,        
        password: null}
  },
  reducers: {    
      midvalue: (state:any,action: {type: string, payload: {payload:any , type: string}})  => {
      let field: string[] = action.payload.type.split('.') ;
      
        state[field[0]][field[1]] = action.payload.payload;            
    }
  },
})

// Action creators are generated for each case reducer function
export const { midvalue } = userReducer.actions

export default userReducer