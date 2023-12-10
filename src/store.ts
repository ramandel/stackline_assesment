import { configureStore } from '@reduxjs/toolkit'
import productData from './productData.ts'

const store = configureStore({
  reducer: {
    product: productData
  },
})

export type RootState = ReturnType<typeof store.getState>
export default store