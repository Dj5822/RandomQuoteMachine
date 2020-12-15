import './App.css';
import './QuoteBoxStyle.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { store } from './Store.js';
import { updateValues } from './Store.js';

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.getQuote = this.getQuote.bind(this);
  }

  loadQuote(){
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        this.props.update({
          quote: `${data.content}`,
          author: `${data.author}`,
          tweet: "https://twitter.com/intent/tweet?text=\""
          .concat(`${data.content}`).concat("\" ").concat(`${data.author}`)
        });
      });
  }

  // loads new quote after application starts.
  componentDidMount(){
    this.loadQuote();
  }

  // loads new quote when button is pressed.
  getQuote(){
    this.loadQuote();
  }

  render(){
    return(
      <div id="quote-box">
        <p id="text">"{this.props.quote}"</p>
        <p id="author">- {this.props.author}</p>
        <div id="button-bar">
          <a href={this.props.tweet} target="_blank" rel="noreferrer" id="tweet-quote"><FontAwesomeIcon id="icon" icon={faPaperPlane} /></a>
          <button id="new-quote" onClick={this.getQuote}>New Quote</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quote: state.quote,
    author: state.author,
    tweet: state.tweet
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    update: (newValues) => {
      dispatch(updateValues(newValues));
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(QuoteMachine);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Container />
      </Provider>
    </div>
  );
}

export default App;
