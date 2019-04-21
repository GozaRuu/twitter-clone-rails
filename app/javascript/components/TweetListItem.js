import React from 'react'

export default function TweetListItem({name, body}) {
  return (
    <React.Fragment>
      <li className="collection-item avatar">
        <i className="material-icons circle">person_pin</i>
        <span className="title">{name}</span>
        <p>{body}</p>
      </li>
    </React.Fragment>
  )
}
