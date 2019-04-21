import React, { Component } from 'react'
import TweetListItem from './TweetListItem'

export class TweetList extends Component {
  render() {
    return (
      <div>
        <ul className="collection">
          <TweetListItem />
          <TweetListItem />
          <TweetListItem />
        </ul>
      </div>
    )
  }
}

export default TweetList
