import React, { Component } from 'react'

export class TweetList extends Component {
  render() {
    return (
      <div>
        <ul className="collection">
          <TweetListItem />
        </ul>
      </div>
    )
  }
}

export default TweetList
