
import { AppDispatch } from "../store";
import { bookSlice } from "./BookSlice";
import { IBooks } from "../../models/IBook";
import axios from "axios";


const API_KEY = 'AIzaSyC4Bv_FSMKrOSot6U3EhTfZMXWoinXGOl0';
export const fetchBooks = (query: string, selectedCategory: string, selectedSorting: string, indexPage:number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(bookSlice.actions.booksFetching());
    const response = await axios.get<IBooks>(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=30&orderBy=${selectedSorting}&printType=${selectedCategory}&startIndex=${indexPage}&key=${API_KEY}`);
    dispatch(bookSlice.actions.booksFetchingSuccess(response.data));
  } catch (e) {
    dispatch(bookSlice.actions.booksFetchingError(e.message));
  }
};