import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';
import CommentFormContainer from './CommentFormContainer';

const App = () => (
    <div className="App">
        <CommentsListContainer />
        <CommentFormContainer />
    </div>
)

export default App;