import React from 'react';
import './App.css';
import CommentForm from './CommentForm';
import CommentsListContainer from './CommentsListContainer';

const App = () => 
    <div className="App">
        <CommentsListContainer />
        <CommentForm />
    </div>

export default App;