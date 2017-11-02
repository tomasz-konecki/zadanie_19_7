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
// eslint-disable-next-line
const editComment = (text, id) => {
    return {
        type: EDIT_COMMENT,
        text,
        id
    }
}
// eslint-disable-next-line
const removeComment = id => {
    return {
        type: REMOVE_COMMENT,
        id
    }
}
// eslint-disable-next-line
const thumbUpComment = (id, likes) => {
    return {
        type: THUMB_UP_COMMENT,
        id,
        votesUp: ++likes
    }
}
// eslint-disable-next-line
const thumbDownComment = (id, dislikes) => {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
        votesDown: ++dislikes
    }
}
// eslint-disable-next-line
const addUser = (id, name) => {
    return {
        type: ADD_USER,
        id,
        name
    }
}
// eslint-disable-next-line
const removeUser = id => {
    return {
        type: REMOVE_USER,
        id,
    }
}

export default addComment;
