import React, { Component } from 'react'
import TweetListItem from './TweetListItem'

export class TweetList extends Component {
  render() {
    return (
      <div>
        <ul className="collection">
          {this.props.tweets.map((tweet, index) => (
            <TweetListItem key={index} {...tweet} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TweetList
