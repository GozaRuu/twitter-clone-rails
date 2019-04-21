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
  render() {
    return (
      <div className="container">
        <TweetBox />
        <TweetList tweets={mockTweets} />
      </div>
    )
  }
}

export default main
