import {movieReducer} from "./reducer/MovieReducer";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";
import {tvReducer} from "./reducer/TvReducer";
import {detailReducer} from "./reducer/DetailReducer";

const rootReducer = combineReducers({
    getMovieReducer: movieReducer,
    getTvReducer : tvReducer,
    getDetailReducer : detailReducer,
})

const store = createStore(rootReducer,
    compose(applyMiddleware(thunk, logger)))

export default store
