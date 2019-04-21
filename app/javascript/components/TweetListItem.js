import React from 'react'

export default function TweetListItem({tweet}) {
  return (
    <React.Fragment>
      <li className="collection-item avatar">
        <i className="material-icons circle">person_pin</i>
        <span className="title">{tweet.name}</span>
        <p>{tweet.body}</p>
      </li>
    </React.Fragment>
  )
}
