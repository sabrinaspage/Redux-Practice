const redux = require("redux");
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger({});

const BUY_ICECREAM = "BUY_ICECREAM";
const BUY_CAKE = "BUY_CAKE";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

function buyIcecream() {
  return {
    type: BUY_ICECREAM,
    info: "Second redux action",
  };
}

// action is an object with a type property
// action creator is a function which returns an action

// (previousState, action) => newState

// the application state might only have one property
// but assuming there are more, it's safe to assume we should
// make a copy of that object so none of the other values change
// except that one property we're changing

const initialState = {
  numOfCakes: 10,
  numOfIcecreams: 20,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
      };

    default:
      return state;
  }
};

const initialCakeState = {
  numOfCakes: 10,
};

const initialIcecreamState = {
  numOfIcecreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers(
    {
        cake: cakeReducer,
        iceCream: icecreamReducer
    }
);

// reducer helps the store make the transitions based on the actions received

const store = createStore(rootReducer, applyMiddleware(logger));



console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() =>{});
// this listener is called everytime the action creator is dispatched
// this will happen until we unsubscribe the listener
store.dispatch(buyCake()); // accepts an action (object), which invokes the action creator, and invoke the action; dispatch functions to update store
store.dispatch(buyCake()); // accepts an action (object), which invokes the action creator, and invoke the action
store.dispatch(buyCake()); // accepts an action (object), which invokes the action creator, and invoke the action

store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
unsubscribe();
// as you can see below, the listener is not called, as it has been unsubscribed
store.dispatch(buyCake()); // accepts an action (object), which invokes the action creator, and invoke the action

// definitely better to have an action creator so editing actions is much faster

// data fetching - state. loading flag (fetched or not?)
// data: [], list of users
// error: ``, might fail

// Actions:
// FETCH_USERS_REQUEST - Fetch list of users
// FETCH_USERS_SUCCESS - Fetched successfully
// FETCH_USERS_FAILURE - Error fetching the data

// Reducers:
//