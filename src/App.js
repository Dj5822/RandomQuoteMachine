import './App.css';
import './QuoteBoxStyle.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import { Provider } from 'react-redux';
import { store } from './Store.js';

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.getQuote = this.getQuote.bind(this);
  }

  // loads new quote after application starts.
  componentDidMount(){
    this.props.loadNewQuote();
  }

  // loads new quote when button is pressed.
  getQuote(){
    this.props.loadNewQuote();
  }

  render(){
    return(
      <div id="quote-box">
        <p id="text">"{this.props.quote}"</p>
        <p id="author">- {this.props.author}</p>
        <div id="button-bar">
          <a href={this.props.tweet} target="_blank" id="tweet-quote"><FontAwesomeIcon id="icon" icon={faPaperPlane} /></a>
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
    loadNewQuote: () => {
      dispatch(loadQuote())
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
