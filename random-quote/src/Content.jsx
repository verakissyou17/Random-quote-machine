import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faTumblr} from '@fortawesome/free-brands-svg-icons';



class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      quote: 'The only way to do great work is to love what you do.',
      author: 'Steve Jobs',
      color: '#16a085'
    }
    this.changeQuote=this.changeQuote.bind(this);
  }



  changeQuote=async () => {
    const response=await fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });
    const jsonQuoteData=await response.json();
    console.log(jsonQuoteData);

    const ri=Math.floor(Math.random()*jsonQuoteData.quotes.length);
    const randomQuote=jsonQuoteData.quotes[ri];
    console.log(randomQuote);

    const colors=[
      '#16a085',
      '#27ae60',
      '#2c3e50',
      '#f39c12',
      '#e74c3c',
      '#9b59b6',
      '#FB6964',
      '#342224',
      '#472E32',
      '#22FF54',
      '#77B1A9',
      '#73A857'
    ];
    const randomColor=colors[Math.floor(Math.random()*colors.length)];

    console.log(randomColor);

    this.setState({
      quote: randomQuote.quote,
      author: randomQuote.author,
      color: randomColor
    })
  }

  render() {
    return (<div>
      <div id="wrapper">
        <div id="quote-box">
          <div style={{color: this.state.color}} className="quote-text">
            <span id="text"><FontAwesomeIcon icon={faQuoteLeft} /></span>{this.state.quote}</div>
          <div style={{color: this.state.color}} className="quote-author">
            - <span id="author">{this.state.author}</span></div>
          <div className="buttons">
            <a href="https://twitter.com/intent/tweet"
              style={{backgroundColor: this.state.color}}
              className="button"
              id="tweet-quote"
              title="Tweet this quote!"
              target="_top"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.tumblr.com/"
              style={{backgroundColor: this.state.color}}
              className="button"
              id="tumblr-quote"
              title="Post this quote on tumblr!"
              target="_blank"
              rel="noreferrer"><FontAwesomeIcon icon={faTumblr} /></a>
            <button onClick={this.changeQuote}
              style={{backgroundColor: this.state.color}}
              className="button"
              id="new-quote">New quote</button>
          </div>
        </div>
      </div>
    </div>
    )
  }
}






















export default Content;
