import { applyMiddleware } from 'redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import userReducer from './reducers/UserReducer';

const store = createStore(userReducer, composeWithDevTools(applyMiddleware(thunk)));
export type UserStore = ReturnType<typeof userReducer>
export default store;