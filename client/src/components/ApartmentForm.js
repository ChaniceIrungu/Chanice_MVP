import React, { Component } from "react";
import api from "../utils/api";

export default class ApartmentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      numBedrooms: "",
      numBathrooms: "",
      numParking: "",
      monthlyRent: "",
      description: "",
    };
  }

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  addApartment = () => {
    const {
      location,
      numBedrooms,
      numBathrooms,
      numParking,
      monthlyRent,
      description,
    } = this.state;
    const flat = {
      location,
      numBedrooms,
      numBathrooms,
      numParking,
      monthlyRent,
      description,
    };

    api.addApartment(flat).then((response) => {
      this.props.onAddApartment(response);
    });
  };

  render() {
    const {
      location,
      numBedrooms,
      numBathrooms,
      numParking,
      monthlyRent,
      description,
    } = this.state;
    return (
      <div>
        <input
          type="text"
          name="location"
          value={location}
          placeholder="Location"
          onChange={(e) => this.handleInput(e)}
          className="form-control my-2"
        ></input>
        <input
          type="text"
          name="numBedrooms"
          value={numBedrooms}
          placeholder="Number of bedrooms"
          onChange={(e) => this.handleInput(e)}
          className="form-control my-2"
        ></input>
        <input
          type="text"
          name="numBathrooms"
          value={numBathrooms}
          placeholder="Number of bathrooms"
          onChange={(e) => this.handleInput(e)}
          className="form-control my-2"
        ></input>
        <input
          type="text"
          name="numParking"
          value={numParking}
          placeholder="Parking spaces"
          onChange={(e) => this.handleInput(e)}
          className="form-control my-2"
        ></input>
        <div className="input-group">
          <input
            type="number"
            name="monthlyRent"
            value={monthlyRent}
            placeholder="Monthly rent"
            onChange={(e) => this.handleInput(e)}
            className="form-control"
          ></input>
          <div className="input-group-append">
            <span className="input-group-text w-150">KSh</span>
          </div>
        </div>

        <input
          type="text"
          name="description"
          value={description}
          placeholder="Add a short description about your flat"
          onChange={(e) => this.handleInput(e)}
          className="form-control my-2"
        ></input>
        <button
          className="form-control btn btn-primary my-2"
          type="submit"
          onClick={(e) => this.addApartment()}
        >
          Add Apartment
        </button>
      </div>
    );
  }
}
