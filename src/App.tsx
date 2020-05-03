import React from "react";
import { Switch, Route } from "react-router-dom";
import MenuBar from "./components/MenuBar";

//pages
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Switch>
        {/* <Route path="/reactjs" component={ReactPage} />
        <Route path="/javascript" component={Javascript} /> */}
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
