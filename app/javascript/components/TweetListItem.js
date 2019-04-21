import React from 'react'

export default function TweetListItem() {
  return (
    <React.Fragment>
      <li className="collection-item avatar">
        <i className="material-icons circle">person_pin</i>
        <span className="title">Jon Snow</span>
        <p>Tweet #first</p>
      </li>
    </React.Fragment>
  )
}
