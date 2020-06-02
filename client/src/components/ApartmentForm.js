import React, { Component } from "react";
import api from "../utils/api";

export default class ApartmentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "Nairobi",
      numBedrooms: 4,
      numBathrooms: 4,
      numParking: 4,
      monthlyRent: 4,
      description: "abc",
      selectedFile: null,
      msg: "",
    };
  }

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onFileChange = (e) => {
    // Update the state
    this.setState({ selectedFile: e.target.files[0] });
  };

  addApartment = () => {
    const {
      location,
      numBedrooms,
      numBathrooms,
      numParking,
      monthlyRent,
      description,
      selectedFile,
    } = this.state;

    // We create a new FormData called flat
    const flat = new FormData();

    // Update the formData object
    flat.set("location", location);
    flat.set("numBedrooms", numBedrooms);
    flat.set("numBathrooms", numBathrooms);
    flat.set("numParking", numParking);
    flat.set("monthlyRent", monthlyRent);
    flat.set("description", description);
    if (selectedFile) flat.append("images", selectedFile, selectedFile.name);

    // We call the request
    api.addApartment(flat).then((response) => {
      console.log(response);
      this.setState({ msg: response.data.msg });
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
      msg,
    } = this.state;
    return (
      <div className="container">
        <div className="row d-flex justify-content-end">
          <div className="card w-75">
            <div className="card-body">
              <img
                alt="Error"
                className="card-img-top my-1"
                src="https://www.uschamber.com/sites/default/files/styles/article_gallery/public/articles/images/gettyimages-open_small_biz_owner_1200px.jpg?itok=0Wkv1xD6"
              ></img>
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
              <textarea
                type="text"
                name="description"
                value={description}
                placeholder="Add a short description about your flat"
                onChange={(e) => this.handleInput(e)}
                className="form-control my-2"
                rows="3"
              ></textarea>
              <div className="custom-file">
                <input
                  type="file"
                  className="form-control custom-file-input my-2"
                  id="validatedCustomFile"
                  onChange={(e) => this.onFileChange(e)}
                />
                <label
                  className="custom-file-label text-left"
                  htmlFor="validatedCustomFile"
                >
                  Choose some images...
                </label>
              </div>

              {msg && (
                <div
                  className="alert alert-secondary alert-dismissible fade show my-2"
                  role="alert"
                >
                  {msg}
                  <button
                    type="button"
                    class="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              )}
              <button
                className="form-control btn bbtn btn-dark my-2"
                type="submit"
                onClick={(e) => this.addApartment()}
              >
                Add Apartment
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
