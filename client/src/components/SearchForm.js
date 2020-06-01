import React, { useState } from "react";
//https://reacttraining.com/react-router/web/api/Hooks/usehistory
import { useHistory } from "react-router-dom";

export default function SearchForm(props) {
  // The useHistory hook gives you access to the history instance that you may use to navigate.
  let history = useHistory();

  // The setState function is used to update the state. It accepts a new state value and enqueues a re-render of the component.
  const [place, setPlace] = useState("");
  const [checkNumBedrooms, setCheckBedrooms] = useState("");
  const [checkNumBathrooms, setCheckBathrooms] = useState("");
  const [checkNumParking, setCheckNumParking] = useState("");

  const performSearch = (e) => {
    history.push(`/search?place=${place}`);
    // it doesn't work
    // this.props.filterApartments(place, checkNumBedrooms, checkNumBathrooms, checkNumParking);
  };

  const handleChange = (e) => {
    // Assigna valor a la variable place
    setPlace(e.target.value);
    setCheckBedrooms(e.target.value);
    setCheckBathrooms(e.target.value);
    setCheckNumParking(e.target.value);
    // console.log(e.target.value);
    // it doesn't work
    // this.props.onGrabPlace(e.target.value);
  };

  return (
    <div className="w-100%">
      <div className="card center">
        <div className="container">
          <div className="md-8 px-0">
            <img src="holdingphone.jpg.jpg" className="img-fluid my-3" alt="" />
          </div>
        </div>

        <div className="card-body">
          <h5 className="card-title">
            <strong>Find A House</strong>
          </h5>

          <p className="card-text">Search. See. Love. </p>
          <input
            name="search"
            value={place}
            onChange={handleChange}
            className="form-control"
          />

          <div>
            <p className="my-3">Bedrooms</p>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="checkNumBedrooms"
                name="checkNumBedrooms"
                value={checkNumBedrooms}
                onChange={handleChange}
              />
              <label
                className="custom-control-label"
                htmlFor="checkNumBedrooms"
              >
                3
              </label>
            </div>
            <p className="my-3">Bathrooms</p>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="checkNumBathrooms"
                name="checkNumBathrooms"
                value={checkNumBathrooms}
                onChange={handleChange}
              />
              <label
                className="custom-control-label"
                htmlFor="checkNumBathrooms"
              >
                2
              </label>
            </div>
            <p className="my-3">Parking space</p>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="checkNumParking"
                name="checkNumParking"
                value={checkNumParking}
                onChange={handleChange}
              />
              <label className="custom-control-label" htmlFor="checkNumParking">
                3
              </label>
            </div>
            <p className="my-3">Price</p>
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
    </div>
  );
}
