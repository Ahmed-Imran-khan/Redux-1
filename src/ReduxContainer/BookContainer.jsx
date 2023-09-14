import { useDispatch, useSelector } from "react-redux";
import { BuyBook, AddBook } from "./BookType";

function BookContainer() {
  const noOfBooks = useSelector((state) => state.NumberOfBook);
  const dispatch = useDispatch();

  return (
    <>
      <h1>REDUX | CHANGING STATE </h1>
      <span>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQi5vdma-jhcNmbREV5wtNO5IBNwMbQdYE8_vQyWU&s"
          alt="image"
        />
      </span>
      <span className="value">{noOfBooks}</span>
      <div>
        <button onClick={() => dispatch({ type: BuyBook })}>Buy Book</button>
      </div>
      <br />
      <div>
        <button onClick={() => dispatch({ type: AddBook })}>Add Book</button>
      </div>
    </>
  );
}

export default BookContainer;
