import { combineReducers } from "redux";
import { cakeReducer } from "./cakes/cakeReducer";
import { icecreamReducer } from "./icecream/icecreamReducer";
import { bananaReducer } from "./bananas/bananaReducers";
import { usersReducer } from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  banana: bananaReducer,
  user: usersReducer,
});

export default rootReducer;
