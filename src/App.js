import "./App.css";
import React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IcecreamContainer from "./components/IcecreamContainer";
import HooksBananaContainer from "./components/HooksBananaContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        <HooksBananaContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <IcecreamContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
