import React, { Component } from 'react'

class TweetBox extends Component {
  constructor(props) {
    super(props)
    this.state = { textareaValue: '' }
  }
  handleChange = (event) => {
    this.setState({ textareaValue: event.target.value })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addTweet(this.state.textareaValue)
  }
  render() {
    return (
      <div className="row">
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <textarea
              className="materialize-textarea"
              onChange={this.handleChange}
              value={this.state.textareaValue}
            />
            <label>what up</label>
            <button className="btn right">Tweet</button>
          </div>
        </form>
      </div>
    )
  }
}

export default TweetBox
