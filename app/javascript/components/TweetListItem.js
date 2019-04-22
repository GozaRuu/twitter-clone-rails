import React from 'react'
import moment from 'moment'

export default function TweetListItem({ name, body, created_at }) {
  return (
    <React.Fragment>
      <li className="collection-item avatar">
        <i className="material-icons circle">person_pin</i>
        <span className="title">{name}</span>
        <time>{moment(created_at).fromNow()}</time>
        <p>{body}</p>
      </li>
    </React.Fragment>
  )
}
