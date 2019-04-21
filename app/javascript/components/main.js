import React, { Component } from 'react'
import TweetBox from './TweetBox'
import TweetList from './TweetList'

export class main extends Component {
  render() {
    return (
      <div className="container">
        <TweetBox />
        <TweetList />
      </div>
    )
  }
}

export default main
