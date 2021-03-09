import React from "react";
import Home from "./Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Internship from "./components/internships/Internship";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} index={11} />
        {/* <Route exact path="/internships/:title" component={Internship} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
