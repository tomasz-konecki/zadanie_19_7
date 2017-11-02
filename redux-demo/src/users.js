import { ADD_USER, REMOVE_USER } from './actions';

const users = (state = [], action) => {

    switch (action.type) {

        case ADD_USER:
            return [{
                id: action.id,
                name: action.name,
            }, ...state.users];
            //break;

        case REMOVE_USER:
            return state.comments.filter(user => user.id !== action.id);
            //break;

        default:
            return state;
    }
}

export default users;