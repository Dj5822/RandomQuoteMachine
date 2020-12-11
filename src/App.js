import './App.css';
import './QuoteBoxStyle.css';
import React from 'react';

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: ""
    }
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote(){
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        this.setState({
          quote: `${data.content}`,
          author: `${data.author}`
        });
      });
  }

  render(){
    return(
      <div id="quote-box">
        <p id="text">{this.state.quote}</p>
        <p id="author">Author: {this.state.author}</p>
        <button id="new-quote" onClick={this.getQuote}>New Quote</button>
        <a href="_blank" id="tweet-quote">Tweet</a>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
        <QuoteMachine />
    </div>
  );
}

export default App;
