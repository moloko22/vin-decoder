import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {VIN} from "./reducers/VIN";
const store = createStore(VIN, composeWithDevTools(
    applyMiddleware(thunk),
));



export default store;