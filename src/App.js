import "./App.css";
import FetchAPi from "./FetchAPi";
import { Provider } from "react-redux";
import store from "./ReduxContainer/store";
import BookContainer from "./ReduxContainer/BookContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FetchAPi />
        <BookContainer />
      </div>
    </Provider>
  );
}

export default App;
