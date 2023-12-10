import { configureStore } from '@reduxjs/toolkit'
import productData from './productDataReducer.ts'

const store = configureStore({
  reducer: {
    product: productData
  },
})

export type RootState = ReturnType<typeof store.getState>
export default store