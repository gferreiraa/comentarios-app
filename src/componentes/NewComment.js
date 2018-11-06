import React, {Component} from 'react'

export default class NewComment extends Component {
    state = {
        newComment: ''
    }
    handleChange = event => {
        this.setState({newComment: event.target.value});
    }
    sendComment = () => {
        this.props.sendComment(this.state.newComment);
        this.setState({
            newComment: ''
        });
    }
    render() {
        return (
            <div>
                <textarea value={this.state.newComment} onChange={this.handleChange}></textarea>
                <button onClick={this.sendComment}>Send</button>
            </div>
        )
    }
}
