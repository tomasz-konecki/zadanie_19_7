export const users = (state = [], action) => {

        switch (action.type) {

        case ADD_USER:
            return [{
                id: action.id,
                name: action.text,
            }, ...state.users];
            break;

        case REMOVE_USER:
            return state.comments.filter(user => user.id !== action.id);
}