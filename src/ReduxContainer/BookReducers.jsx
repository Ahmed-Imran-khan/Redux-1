import { BuyBook, AddBook } from "./BookType";

const initialState = {
  NumberOfBook: 20,
};

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case BuyBook:
      return {
        ...state,
        NumberOfBook: state.NumberOfBook - 1, // Decrease the count when buying
      };
    case AddBook:
      return {
        ...state,
        NumberOfBook: state.NumberOfBook + 1, // Increase the count when adding
      };
    default:
      return state;
  }
};

export default BookReducer;
