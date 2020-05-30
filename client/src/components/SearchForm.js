import React, { useState } from "react";
//https://reacttraining.com/react-router/web/api/Hooks/usehistory
import { useHistory } from "react-router-dom";

export default function SearchForm(props) {
  // The useHistory hook gives you access to the history instance that you may use to navigate.
  let history = useHistory();

  // The setState function is used to update the state. It accepts a new state value and enqueues a re-render of the component.
  const [place, setPlace] = useState("");

  const performSearch = (e) => {
    history.push(`/search?place=${place}`);
  };

  const handleChange = (e) => {
    // Assigna valor a la variable place
    setPlace(e.target.value);
    // it doesn't work
    // this.props.onGrabPlace(e.target.value);
  };

  return (
    <div>
      <div className="card col-md-4 px-0 center">
        <div className="container">
          <div className="md-8 px-0">
            <img src="holdingphone.jpg.jpg" className="img-fluid my-3" alt="" />
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <strong>Find A house</strong>
          </h5>
          <p className="card-text">
            Pick a city and find your ideal house by the click of a button.{" "}
          </p>
          <input
            name="search"
            value={place}
            onChange={handleChange}
            className="form-control"
          />
          <button
            onClick={(e) => performSearch(e)}
            className="btn btn-primary my-4
          "
          >
            Search Now
          </button>
        </div>
      </div>
    </div>
  );
}
