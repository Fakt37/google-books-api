import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IndexPageState {
	indexPage: number
}
const initialState: IndexPageState = {
  indexPage: 0
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
		setIndexPage(state, action: PayloadAction<number>) {
			state.indexPage += action.payload
		},
  }
});

export const { setIndexPage} = paginationSlice.actions;
export default paginationSlice.reducer;