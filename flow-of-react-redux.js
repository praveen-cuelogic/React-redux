#File bookType.js----------------
export const BUY_BOOK = "BUY_BOOK";

#File bookAction.js--------------------
import { BUY_BOOK } from "./bookType";

//action
export const buyBook = () => {
  return {
    type: BUY_BOOK,
  };
};


#File bookReducer.js-------------------

import { BUY_BOOK } from "./bookType";

const initialState = {
  numberOfBooks: 15,
};

//reducer
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BOOK:
      return {
        ...state,
        numberOfBooks: state.numberOfBooks - 1,
      };

    default:
      return state;
  }
};

export default bookReducer;


#File store.js-------------------
import bookReducer from "./book/bookReducer";
import { createStore } from "redux";

const store = createStore(bookReducer);

export default store;

#File index.js-------------------
export { buyBook } from "./book/bookAction";


#File BookContainer.jsx-------------------
import React from "react";
import { connect } from "react-redux";
import { buyBook } from "../redux";

function bookContainer(props) {
  return (
    <div>
      <h1>Number of Books- {props.numOfBooks}</h1>
      <button onClick={props.buyBook}>Buy Book</button>
    </div>
  );
}

//value of state map into props
const mapStatetoProps = (state) => {
  return {
    numOfBooks: state.numberOfBooks,
  };
};

//value of dispatch map into props
const mapDispatchtoProps = (dispatch) => {
  return {
    buyBook: function () {
      dispatch(buyBook());
    },
  };
};

//which value we are passing that is via: state and
//Using function of dispatch for bookContainerComponent
export default connect(mapStatetoProps, mapDispatchtoProps)(bookContainer);


#File App.js-------------------
import "./App.css";
import BookContainer from "./components/BookContainer";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BookContainer />
      </div>
    </Provider>
  );
}

export default App;

