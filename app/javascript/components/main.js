import React, { Component } from 'react'
import TweetBox from './TweetBox'
import TweetList from './TweetList'

export class main extends Component {
  constructor(props) {
    super(props)
    this.state = { tweets: [] }
  }

  addTweet = body => {
    fetch('/tweets', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    body: JSON.stringify({tweet: body})
    })
      .then(response => response.json())
      .then(newTweet => {
        this.setState(() => ({
          tweets: [...this.state.tweets, newTweet]
        }))
      })
      .catch(e => console.log(e))
  }

  componentDidMount() {
    fetch('/tweets')
      .then(response => response.json())
      .then(tweets => this.setState({ tweets }))
      .catch(e => console.log(e))
  }

  render() {
    return (
      <div className="container">
        <TweetBox addTweet={this.addTweet} />
        <TweetList tweets={this.state.tweets} />
      </div>
    )
  }
}

export default main
