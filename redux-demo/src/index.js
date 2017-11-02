import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import addComment from './actions'
import CommentsListContainer from './CommentsListContainer'

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <CommentsListContainer />
    </Provider>,
    document.getElementById('root')
);

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));

registerServiceWorker();
