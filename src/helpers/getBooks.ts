import axios from 'axios';
import Globals from '../../config'
export async function fetchBookList(): Promise<any[]> {
  try {
    const url = Globals.BASE_URL + 'book/list';
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching book list:', error);
    throw error;
    return [];
  }
}

export async function fetchBookData(bookId: string): Promise<any> {
  try {
    const url = Globals.BASE_URL + `book/get/${bookId}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching book list:', error);
    return [];
  }
}