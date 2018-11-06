import React, {Component} from 'react'

export default class Comments extends Component {
    render() {
        return (
            <div>
                {this.props.comments.map(item => { return "Hello World" + item })}
            </div>
        )
    }
}
