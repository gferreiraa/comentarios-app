import React, { Component } from 'react'

export default class Comentario extends Component {
    state = {
        newComment: '',
        comments: [
            'Comment1',
            'Comment2',
            'Comment3'
        ]
    }
    sendComment = () => {
        this.setState({
            comments: [...this.state.comments, this.state.newComment],
            newComment: ''
        });
    }
    handleChange = event => {
        this.setState({
            newComment: event.target.value
        });
    }
  render() {
    return (
      <div>

        { /* New Comment */}
        <div>
            <textarea value={this.state.newComment} onChange={this.handleChange}></textarea>
            <button onClick={this.sendComment}>Send</button>
        </div>
        
        { /* Comments */}
        <div>
            {this.state.comments.map( item => {
                return "Hello World" + item
            })}
        </div>
      </div>
    )
  }
}
