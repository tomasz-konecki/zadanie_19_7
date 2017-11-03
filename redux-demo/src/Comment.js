import React from 'react';
import './Comment.css';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment}) =>
  <li>
    <p>{text}</p><span>votes: {votes} </span>
    <button className={'btn-up'} onClick={() => thumbUpComment(id)}>Up</button>
    <button className={'btn-down'} onClick={() => thumbDownComment(id)}>Down</button>

  </li>;

export default Comment;