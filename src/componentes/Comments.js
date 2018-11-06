import React, {Component} from 'react'

import Comment from './Comment'

export default class Comments extends Component {
    render() {
        return (
            <div>
                {this.props.comments.map(item =>  <Comment item={item}/>)}
            </div>
        )
    }
}
