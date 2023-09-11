import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
  selectedCategory: 'all', 
  selectedSorting: 'relevance', 
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
	 setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSelectedSorting: (state, action) => {
      state.selectedSorting = action.payload;
    },
  },
});

export const { setQuery, setSelectedCategory, setSelectedSorting } = searchSlice.actions;
export default searchSlice.reducer;
