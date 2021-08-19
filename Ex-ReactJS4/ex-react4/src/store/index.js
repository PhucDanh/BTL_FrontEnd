import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk";
import questions from "./reducers/questions"

const reducer = combineReducers({
    questions
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
);