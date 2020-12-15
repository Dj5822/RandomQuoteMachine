import { createStore } from 'redux';

const UPDATE = 'UPDATE';

const INITIALSTATE = {
  quote: "",
  author: "",
  tweet: ""
}

const QuoteReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case UPDATE:
      return ({
        quote: action.values.quote,
        author: action.values.author,
        tweet: action.values.tweet
      });
    default:
      return state;
  }
};

const updateValues = (newValues) => {
  return {
    type: UPDATE,
    values: newValues
  }
}

const store = createStore(QuoteReducer);
export { store };
export { updateValues };
