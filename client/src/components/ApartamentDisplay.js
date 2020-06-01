import React, { Component } from "react";
import ImageToDisplay from "./ImageToDisplay";

export default class ApartamentDisplay extends Component {
  // this doesn't works
  state = {
    apartmentToDisplay: null,
    imagesToDisplay: [],
  };

  // componentDidMount() {
  //   const { id } = this.props.match.params;
  //   fetch(`/search/apartment/${id}`).then((response) => {
  //     console.log(response);
  //     this.setState(() => ({ apartmentToDisplay: response }));
  //   });
  // }

  render() {
    return (
      <div className="container border-card">
        {/* <div className="container">
          <div className="row mt-2 mb-2">
            <div className="col-sm-12 text-center">
              {imagesToDisplay.map((image) => (
                <ImageToDisplay source={image} key={image} />
              ))}
            </div>
          </div>
        </div> */}
        <img
          className="card-img-top my-3"
          src="https://d1052pu3rm1xk9.cloudfront.net/smw_768/931b0d17a0790afc468279913c86af687fc30eb5d73cc42bbe4a9d16.jpg"
          alt="Error"
        />
        <div className="card-body">
          <div className="row d-flex justify-content-around">
            <div>
              <i className="fas fa-search-location fa-3x text-light mx-4"></i>
              <h5 className="text-light my-3">Nairobi</h5>
            </div>
            <div>
              <i className="fas fa-bed fa-3x text-light mx-4"></i>
              <h5 className="text-light my-3">4</h5>
            </div>
            <div>
              <i className="fas fa-bath fa-3x text-light mx-4"></i>
              <h5 className="text-light my-3">2</h5>
            </div>
            <div>
              <i className="fas fa-car fa-3x text-light mx-4"></i>
              <h5 className="text-light my-3">1</h5>
            </div>
          </div>

          <p className="card-text my-4 text-dark">
            Description: Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="row d-flex justify-content-between my-5 align-items-center text-white">
            {/* No ho puc centrar!*/}
            <div className="col d-flex">
              <i className="align-middle fas fa-coins fa-3x"></i>
              <h3 className="align-middle mx-3">2.000 KSh</h3>
            </div>
            <div className="col">
              <a href="/apartments" className="btn btn-outline-light btn-lg">
                Go to the search
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
