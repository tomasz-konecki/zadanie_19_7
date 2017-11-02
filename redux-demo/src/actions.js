import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';

const addComment = text => {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

const editComment = (text, id) => {
    return {
        type: EDIT_COMMENT,
        text,
        id
    }
}

const removeComment = id => {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

const thumbUpComment = (id, likes) => {
    return {
        type: THUMB_UP_COMMENT,
        id,
        votesUp: ++likes
    }
}

const thumbDownComment = (id, dislikes) => {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
        votesDown: ++dislikes
    }
}

const addUser = (id, name) => {
    return {
        type: ADD_USER,
        id,
        name
    }
}

const removeUser = id => {
    return {
        type: REMOVE_USER,
        id,
    }
}

const boundAddComment = text => dispatch(addComment(text));
const boundEditComment = (text, id) => dispatch(editComment(text, id));
const boundRemoveComment = id => dispatch(removeComment(id));
const boundThumbUpComment = (id, likes) => dispatch(thumbUpComment(id, likes));
const boundThumbDownComment = (id, likes) => dispatch(thumbDownComment(id, dislikes));
const boundAddUser = (id, name) => dispatch(addUser(id, name));
const boundRemoveUser = (id, name) => dispatch(removeUser(id, name));
