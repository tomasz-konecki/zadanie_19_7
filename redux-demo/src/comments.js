import { ADD_COMMENT, EDIT_COMMENT, REMOVE_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT } from './actions';

const comments = (state = [], action) => {

    switch (action.type) {

        case ADD_COMMENT:
            return [...state, {
                id: action.id,
                text: action.text,
                votes: 0
            }];

        case EDIT_COMMENT:
            let check = state.comments.find(comment => (comment.id === action.id));
            if (check) {
                const index = state.comments.indexOf(check);
                return [
                   ...state.comments.slice(0, index),
                   {...state.comments[index], text: action.text},
                   ...state.comments.slice(index+1, state.comments.length)
                ];
            } else {
                return state;
            }

        case THUMB_UP_COMMENT:
            return state.map(comment => {
                if(comment.id === action.id) {
                return {...comment, votes: comment.votes + 1}
                }
            return comment;
            });

        case THUMB_DOWN_COMMENT:
            return state.map(comment => {
                if(comment.id === action.id) {
                    if (comment.votes > 0) {
                        return {...comment, votes: comment.votes - 1}
                    }
                }
            return comment;
            });

        case REMOVE_COMMENT:
            return state.filter(comment => comment.id !== action.id);

        default:
            return state;
    }
    
}

export default comments;
