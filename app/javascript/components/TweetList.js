import React, { Component } from 'react'

export class TweetList extends Component {
  render() {
    return (
      <div>
        <ul className="collection">
            <li className="collection-item avatar">
                <i className="material-icons circle">person_pin</i>
                <span className="title">Jon Snow</span>
                <p>Tweet #first</p>
            </li>
            <li className="collection-item avatar">
                <i className="material-icons circle">person_pin</i>
                <span className="title">Jon Snow</span>
                <p>Tweet #first</p>
            </li>
            <li className="collection-item avatar">
                <i className="material-icons circle">person_pin</i>
                <span className="title">Jon Snow</span>
                <p>Tweet #first</p>
            </li>
        </ul>
      </div>
    )
  }
}

export default TweetList
