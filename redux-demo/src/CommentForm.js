import React from 'react';
import './CommentForm.css';

const CommentForm = add =>
    <form>
        <div>
            <label htmlFor="new_comment">Add a comment:</label>
            <textarea id="new_comment" name="new_comment" rows="6"></textarea>
        </div>
        <div>
            <button className="btn-add" onClick={(e) => {e.preventDefault();
                const form = document.getElementById("new_comment");
                add.addComment(form.value);
                form.value = "";}}>
            Submit</button>
        </div>
    </form>

export default CommentForm;