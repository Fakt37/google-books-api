import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IBooks } from "../../models/IBook"

interface BookState {
	books: IBooks
	isLoading: boolean
	error: string
}

const initialState: BookState = {
	books: null,
	isLoading: false,
	error: ''
}

export const bookSlice = createSlice({
	name: 'book',
	initialState,
	reducers: { 
		booksFetching(state) {
			state.isLoading = true
		},
		booksFetchingSuccess(state, action: PayloadAction<IBooks>) {
			state.isLoading = false
			state.error = ''
			state.books = {
        ...state.books,
        items: [...(state.books?.items || []), ...action.payload.items],
        totalItems: action.payload.totalItems, 
        kind: action.payload.kind, 
      };
			
		},
		booksFetchingError(state, action: PayloadAction<string>) {
			state.isLoading = false
			state.error = action.payload
		}
	}
})

export default bookSlice.reducer