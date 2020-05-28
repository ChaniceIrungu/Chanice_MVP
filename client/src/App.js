import React, { Component } from "react";
import ApartmentForm from "./components/ApartmentForm";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchList from "./components/SearchList";

import SearchForm from "./components/SearchForm";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartments: [],
    };
  }
  deleteItem(id) {
    fetch(`/apartments/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(this.getAllApartments);
  }
  onAddApartment() {
    this.getAllApartments();
  }
  render() {
    return (
      <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            Keja Hunt KE
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item ">
                <Link to="/search" className="nav-link">
                  All Apartments
                </Link>
              </li>
              <li class="nav-item ">
                <Link to="/create" className="nav-link">
                  List Your apartment
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container pt-3">
          <div className="my-3 text-centre">
            <h1>
              <centre>
                <strong>House Hunting Kenya</strong>
              </centre>
            </h1>
            <h3>
              <centre>
                <strong>Keja Hunting made Easier!!</strong>
              </centre>
            </h3>
            ​
            <SearchForm />​
            <Switch>
              <Route path="/create">
                <ApartmentForm onAdd={this.onAddApartment} />
              </Route>
              <Route path="/search">
                <SearchList />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
