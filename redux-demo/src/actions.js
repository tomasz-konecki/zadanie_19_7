/* eslint-disable */

import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';

export const addComment = text => {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

export const removeComment = commentId => {
    return {
        type: REMOVE_COMMENT,
        id: commentId
    }
}

export const thumbUpComment = commentId => {
    return {
        type: THUMB_UP_COMMENT,
        id: commentId
    }
}

export const thumbDownComment = commentId => {
    return {
        type: THUMB_DOWN_COMMENT,
        id: commentId
    }
}

const editComment = (text, id) => {
    return {
        type: EDIT_COMMENT,
        text,
        id
    }
}

const addUser = (userId, name) => {
    return {
        type: ADD_USER,
        id: userId,
        name
    }
}

const removeUser = userId => {
    return {
        type: REMOVE_USER,
        id: userId
    }
}

