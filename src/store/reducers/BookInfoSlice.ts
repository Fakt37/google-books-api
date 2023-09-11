import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IBook } from "../../models/IBook"

interface BookInfoState {
	book: IBook
	isShow: boolean
}

const initialState: BookInfoState = {
	book: null,
	isShow: false
}

export const bookInfoSlice = createSlice({
	name: 'bookInfo',
	initialState,
	reducers: { 
		setBookInfo(state, action: PayloadAction<IBook>) {
			state.book = action.payload
      },
		setBookInfoShow(state, action: PayloadAction<boolean>) {
			state.isShow = true
		}
	}
})

export const { setBookInfo} = bookInfoSlice.actions;
export default bookInfoSlice.reducer