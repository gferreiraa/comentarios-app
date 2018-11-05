import React, { Component } from 'react'

export default class Comentario extends Component {
    state = {
        comments: [
            'Comment1',
            'Comment2',
            'Comment3'
        ]
    }
    sendComment = () => {
        this.setState({
            comments: [...this.state.comments, "New Comment!"]
        });
    }
  render() {
    return (
      <div>

        { /* New Comment */}
        <div>
            <textarea></textarea>
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
