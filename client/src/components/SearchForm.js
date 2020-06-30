import React, { useState, useEffect } from "react";
//https://reacttraining.com/react-router/web/api/Hooks/usehistory
import { useHistory } from "react-router-dom";

export default function SearchForm(props) {
  // The useHistory hook gives you access to the history instance that you may use to navigate.
  let history = useHistory();

  // The setState function is used to update the state. It accepts a new state value and enqueues a re-render of the component.
  const [place, setPlace] = useState("");
  const [bedrooms, setCheckBedrooms] = useState("");
  const [bathrooms, setCheckBathrooms] = useState("");
  const [cars, setCheckNumParking] = useState("");

  const performSearch = () => {
    history.push(`/search?place=${place}`);
  };

  useEffect(() => {
    performSearch();
  }, [place]);

  // const performSearch = () => {
  //   history.push(
  //     `/search?place=${place}&bedrooms=${bedrooms}&bathrooms=${bathrooms}&cars=${cars}`
  //   );
  // };

  // useEffect(() => {
  //   performSearch();
  // }, [place, bedrooms, bathrooms, cars]);

  const handleChange = (e) => {
    // console.log(e.target.name);
    // Assigna valor a les variables
    if (e.target.name === "search") setPlace(e.target.value);
    if (e.target.name === "checkNumBedrooms") setCheckBedrooms(e.target.value);
    if (e.target.name === "checkNumBathrooms")
      setCheckBathrooms(e.target.value);
    if (e.target.name === "checkNumParking") setCheckNumParking(e.target.value);
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
            <strong>Find A House/Tafuta Keja Hapa</strong>
          </h5>

          <p className="card-text">
            Search for your ideal house by the click of a button!!{" "}
          </p>
          <input
            name="search"
            value={place}
            onChange={handleChange}
            className="form-control"
          />

          <div>
            <p className="my-3">Fsilter by ...</p>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="checkNumBedrooms">
                  <i className="fas fa-bed"></i>
                </label>
              </div>
              <select
                className="custom-select"
                name="checkNumBedrooms"
                id="checkNumBedrooms"
                value={bedrooms}
                onChange={handleChange}
              >
                <option defaultValue>Number of Bedrooms</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="3">6 or more</option>
              </select>
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="checkNumBathrooms">
                  <i className="fas fa-bath"></i>{" "}
                </label>
              </div>
              <select
                className="custom-select"
                name="checkNumBathrooms"
                id="checkNumBathrooms"
                value={bathrooms}
                onChange={handleChange}
              >
                <option defaultValue>No. of bathrooms</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5 or more</option>
              </select>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="checkNumParking">
                  <i className="fas fa-car"></i>{" "}
                </label>
              </div>
              <select
                className="custom-select"
                name="checkNumParking"
                id="checkNumParking"
                value={cars}
                onChange={handleChange}
              >
                <option defaultValue>Parking space per house</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5 or more</option>
              </select>
            </div>

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
