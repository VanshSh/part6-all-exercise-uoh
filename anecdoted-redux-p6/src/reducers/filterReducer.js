import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'Filter',
  initialState: null,
  reducers: {
    filterAncedote: (state, action) => action.payload,
  },
})

export const { filterAncedote } = filterSlice.actions

export default filterSlice
