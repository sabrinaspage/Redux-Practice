import "./App.css";
import React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IcecreamContainer from "./components/IcecreamContainer";
import HooksBananaContainer from "./components/HooksBananaContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksBananaContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <IcecreamContainer />
      </div>
    </Provider>
  );
}

export default App;
