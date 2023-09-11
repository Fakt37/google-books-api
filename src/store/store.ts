import { combineReducers , configureStore} from "@reduxjs/toolkit";
import bookReducer from './reducers/BookSlice';
import searchReducer from './reducers/SearchSlice'
import paginationReducer from './reducers/PaginationSlice'
import bookInfoReducer from './reducers/BookInfoSlice'

const rootReducer = combineReducers({
	fetch:bookReducer,
	search: searchReducer,
	pagination: paginationReducer,
	bookInfo: bookInfoReducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']