import React from 'react';
import './CommentList.css';

const CommentList = (props) => {
    const { comments } = props;         //propsの中にあるcommentsを取り出してくれる   const comments=props.commnets;
    //propsでcommentを受け取る
    console.log(props);

    const CommentList = comments.map((comment, index) => {
        return (
            <li key={index} className="CommentList-item">
                {comment}
            </li>
        );
    });

    return (
        <div>
            <ul>
                {CommentList}
            </ul>
        </div>
    )
};

export default CommentList;