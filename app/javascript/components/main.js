import React, { Component } from 'react'
import TweetBox from './TweetBox'
import TweetList from './TweetList'

const mockTweets = [
  { name: 'Jon Snow', body: 'My #FirstTweet' },
  { name: 'Yoda', body: 'My #SecondTweet' },
  { name: 'Luke Skywalker', body: 'My #ThirdTweet' },
  { name: 'Ned Stark', body: 'My #ForthTweet' }
]

export class main extends Component {
  render() {
    return (
      <div className="container">
        <TweetBox />
        <TweetList tweets={mockTweets}/>
      </div>
    )
  }
}

export default main
