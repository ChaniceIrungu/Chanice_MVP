import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";
import ImageToDisplay from "./ImageToDisplay";
import "../App.css";

export default function ApartamentDisplay(props) {
  let { id } = useParams();
  let [apartments, setApartments] = useState({ props });
  let [apartmentToDisplay, setApartmentToDisplay] = useState({});

  useEffect(() => {
    api.getOneApartment(id).then((response) => {
      setApartmentToDisplay(response.data);
    });
  }, [id]);

  return (
    <div className="container border-card">
      <div className="col-sm-12 text-center">
        <ImageToDisplay />
      </div>
      <div className="card-body">
        <div className="row d-flex justify-content-around">
          <div>
            <i className="fas fa-search-location fa-3x text-light mx-4"></i>
            <h5 className="text-light  text-center my-3">
              {apartmentToDisplay.location}
            </h5>
          </div>
          <div>
            <i className="fas fa-bed fa-3x text-light mx-4"></i>
            <h5 className="text-light  text-center my-3">
              {apartmentToDisplay.numBedrooms}
            </h5>
          </div>
          <div>
            <i className="fas fa-bath fa-3x text-light mx-4"></i>
            <h5 className="text-light  text-center my-3">
              {apartmentToDisplay.numBathrooms}
            </h5>
          </div>
          <div>
            <i className="fas fa-car fa-3x text-light mx-4"></i>
            <h5 className="text-light text-center my-3">
              {apartmentToDisplay.numParking}
            </h5>
          </div>
        </div>

        <p className="card-text my-4 text-dark"></p>
        <div className="row d-flex justify-content-between my-5 align-items-center text-white">
          <div className="col d-flex justify-content-center">
            <i className="align-middle fas fa-coins fa-3x"></i>
            <h3 className="align-middle mx-3">
              {apartmentToDisplay.monthlyRent} KSh/month
            </h3>
          </div>
          <div className="col d-flex justify-content-center">
            <a href="/search" className="btn btn-outline-light btn-lg">
              Go back to the search
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
