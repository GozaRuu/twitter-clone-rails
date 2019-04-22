import React from 'react'
import moment from 'moment'

export default function TweetListItem({ name, body, created_at, gravatar }) {
  return (
    <React.Fragment>
      <li className="collection-item avatar">
        <img className="circle" src={gravatar} />
        <span className="title">{name}</span>
        <time>{moment(created_at).fromNow()}</time>
        <p>{body}</p>
      </li>
    </React.Fragment>
  )
}
