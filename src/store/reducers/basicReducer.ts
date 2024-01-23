import { createSlice } from '@reduxjs/toolkit'

export const basicReducer = createSlice({
  name: 'basicReducer',
  initialState: {
    info:{date:null,
        name: null,
        surname: null,
        password: null},
    secondary:{
        password2: null,
        visible: false,
        visibleTest: false,
        stateTest: null
        }
  },
  reducers: {    
      modvalue: (state:any,action: {type: string, payload: {payload:any , type: string}})  => {
      let field: string[] = action.payload.type.split('.') ;
      
        state[field[0]][field[1]] = action.payload.payload;            
    }
  },
})

// Action creators are generated for each case reducer function
export const { modvalue } = basicReducer.actions

export default basicReducer