import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import api from "./utils/api";
import "./App.css";
import SearchList from "./components/SearchList";
import ApartmentForm from "./components/ApartmentForm";
import ApartmentDisplay from "./components/ApartamentDisplay";
import ListAll from "./components/ListAll";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartments: [],
    };
  }
  getApartmentsFiltered() {
    api.getApartmentsFiltered().then((response) => {
      this.setState({ apartments: response.data });
    });
  }

  deleteItem(id) {
    api.deleteItem(id).then((response) => {
      this.getApartmentsFiltered();
    });
  }

  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            Keja Hunt KE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <Link to="/search" className="nav-link">
                  Search apartments
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/all" className="nav-link">
                  Discover all the apartments
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/create" className="nav-link">
                  List your apartment
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="main-container d-flex flex-column justify-content-center align-items-center">
          <h1 className="title1">Keja hunting made it easier</h1>​
          <Switch>
            <Route path="/create">
              <ApartmentForm onAddApartment={this.onAddApartment} />
            </Route>
            <Route path="/all">
              <ListAll apartments={this.state.apartments} />
            </Route>
            <Route path="/apartments/:id" component={ApartmentDisplay}>
              <ApartmentDisplay apartments={this.state.apartments} />
            </Route>
            <Route path="/search">
              <SearchList apartments={this.state.apartments} />
            </Route>
            <Route path="/">
              <div>
                <h2 className="title2">Let us Guide you Home</h2>
                <h3 className="title3">Keja Hunting made it Easier</h3>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
