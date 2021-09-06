
//https://codingthesmartway.com/the-mern-stack-tutorial-
//building-a-react-crud-application-from-start-to-finish-part-4/
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateVehicle from "./components/create-vehicle.component";
import EditVehicle from "./components/edit-vehicle.component";
import VehicleList from "./components/vehicle-list.component";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
 
            <Link to="/" className="navbar-brand">MERN-Stack Vehicle App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Vehicles</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Vehicle</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
        <Switch>
          <Route path="/" exact component={VehicleList} />
          <Route path="/edit/:id" component={EditVehicle} />
          <Route path="/create" component={CreateVehicle} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;