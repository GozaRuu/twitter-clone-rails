import React, { Component } from 'react'
import TweetBox from './TweetBox'
import TweetList from './TweetList'

const mockTweets = [
  { id: 0, name: 'Ned Stark', body: 'My #ForthTweet' },
  { id: 1, name: 'Jon Snow', body: 'My #FirstTweet' },
  { id: 2, name: 'Yoda', body: 'My #SecondTweet' },
  { id: 3, name: 'Luke Skywalker', body: 'My #ThirdTweet' }
]

export class main extends Component {
  constructor(props) {
    super(props)
    this.state = { tweets: mockTweets }
  }

  addTweet = (body) => {
    this.setState(() => ({
      tweets: [
        ...this.state.tweets,
        { id: Date.now(), name: 'Jon Snow', body }
      ]
    }))
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
