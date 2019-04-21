import React, { Component } from 'react'

class TweetBox extends Component {
  render() {
    return (
      <div className="row">
        <form>
          <div className="input-field">
            <textarea className="materialize-textarea" />
            <label>what up</label>
            <button className="btn right">Tweet</button>
          </div>
        </form>
      </div>
    )
  }
}

export default TweetBox
