import { combineReducers } from "redux";
import { cakeReducer } from './cakes/cakeReducer';
import { icecreamReducer } from './icecream/icecreamReducer';
import { bananaReducer } from "./bananas/bananaReducers";

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer,
    banana: bananaReducer
});

export default rootReducer;