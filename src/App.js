import React, {Component} from 'react';
import './App.css';
import NewComment from './componentes/NewComment';
import Comments from './componentes/Comments';

class App extends Component {
    state = {
        comments: ['Comment1', 'Comment2', 'Comment3']
    }
    sendComment = comment => {
        this.setState({
            comments: [
                ...this.state.comments,
                comment
            ]
        });
    }
    render() {
        return (
            <div className="App">
              <NewComment sendComment={this.sendComment}/>
              <Comments comments={this.state.comments}/>
            </div>
        );
    }
}

export default App;
