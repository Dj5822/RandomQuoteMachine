import { createStore } from 'redux';

const NEWQUOTE = 'NEWQUOTE';

const INITIALSTATE = {
  quote: "",
  author: "",
  tweet: ""
}

const QuoteReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case NEWQUOTE:
      fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
          return ({
            quote: `${data.content}`,
            author: `${data.author}`,
            tweet: "https://twitter.com/intent/tweet?text=\""+`${data.content}`+"\" "+`${data.author}`
          });
        });
        break;
    default:
      return state;
  }
};

const loadQuote = () => {
  return {
    type: NEWQUOTE
  }
}

const store = createStore(QuoteReducer);
export { store };
