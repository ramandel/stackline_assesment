import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Data from './assets/product_data.model'

const initialState: {
    pending: boolean,
    data?: Data
} = {
    pending: false,
    data: undefined
}

export const dataSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<Data>) => {
            state.data = action.payload
            state.pending = false
        },
        dataIsRequested: (state) => {
            state.pending = true
        }
    },
})

// Action creators are generated for each case reducer function
export const { setData, dataIsRequested } = dataSlice.actions

export default dataSlice.reducer