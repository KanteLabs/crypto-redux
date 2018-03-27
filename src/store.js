import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
    // address: addressReducer,
    // balance: balanceReducer,
    // coins: coinsReducer,
    // coin: coinReducer
})

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;