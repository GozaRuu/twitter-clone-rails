import React, { Component } from 'react'
import TweetListItem from './TweetListItem'

export class TweetList extends Component {
  render() {
    return (
      <div>
        <ul className="collection">
          {this.props.tweets.map(tweet => (
            <TweetListItem key={tweet.id} {...tweet} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TweetList
