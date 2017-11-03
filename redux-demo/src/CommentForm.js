import React from 'react';
import './CommentForm.css';

const CommentForm = addComment =>
    <form>
        <div>
            <label htmlFor="new_comment">Add a comment:</label>
            <textarea id="new_comment" name="new_comment"></textarea>
        </div>
        <div>
            <button className="btn-add" onClick={() => addComment('New comment!!!')}>Submit</button>
        </div>
    </form>

export default CommentForm;