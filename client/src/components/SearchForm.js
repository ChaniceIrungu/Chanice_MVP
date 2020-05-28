import React, { useState } from "react";
//https://reacttraining.com/react-router/web/api/Hooks/usehistory
import { useHistory } from "react-router-dom";

export default function SearchForm() {
  let history = useHistory();
  const [place, setPlace] = useState("");

  const performSearch = () => {
    history.push(`/search?place=${place}`);
  };

  const handleChange = (e) => {
    setPlace(e.target.value);
  };

  return (
    <div>
      <div className="card col-md-4 px-0 center">
        <div className="container">
          <div className="md-8 px-0">
            <img src="holdingphone.jpg.jpg" className="img-fluid" alt="" />
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
          <button onClick={performSearch} className="btn btn-primary">
            Search Now
          </button>
        </div>
      </div>
    </div>
  );
}
