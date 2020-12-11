import './App.css';
import './QuoteBoxStyle.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
      tweet: ""
    }
    this.getQuote = this.getQuote.bind(this);
  }

  componentDidMount(){
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        this.setState({
          quote: `${data.content}`,
          author: `${data.author}`,
          tweet: "https://twitter.com/intent/tweet?text=\""+`${data.content}`+"\" "+`${data.author}`
      });
    });
  }

  getQuote(){
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        this.setState({
          quote: `${data.content}`,
          author: `${data.author}`,
          tweet: "https://twitter.com/intent/tweet?text=\""+`${data.content}`+"\" "+`${data.author}`
      });
    });
  }

  render(){
    return(
      <div id="quote-box">
        <p id="text">"{this.state.quote}"</p>
        <p id="author">- {this.state.author}</p>
        <div id="button-bar">
          <a href={this.state.tweet} target="_blank" id="tweet-quote"><FontAwesomeIcon id="icon" icon={faPaperPlane} /></a>
          <button id="new-quote" onClick={this.getQuote}>New Quote</button>
        </div>
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
