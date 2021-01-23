import React from 'react';
import CommentList from './Component/CommentList/CommentList';
import Form from './Component/Form/Form'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: ['初期コメント']
    };
    this.addComment = this.addComment.bind(this);
  }
  addComment(comment) {
    this.setState({
      comments: [...this.state.comments, comment]  //現状のコピーを作成
    });

  }

  render() {
    return (
      <div className="App">
        <Form onSubmit={this.addComment} />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}


//commentsはcommentsList.jsからのもの、{comments}はApp.jsからのもの


export default App;