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
  }

  render(){
    return(
      <div id="quote-box">
        <p id="text">This is a quote.</p>
        <p id="author">Author: </p>
        <button id="new-quote">New Quote</button>
        <a id="tweet-quote">Tweet</a>
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
