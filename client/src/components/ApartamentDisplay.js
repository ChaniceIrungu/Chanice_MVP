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
      <div className="container">
        <div className="col d-flex justify-content-between my-4">
          {console.log(apartments)}
          {/* {id > 1 && ( */}
          <a
            href={`/apartments/${+id--}`}
            className="btn btn-outline-light btn-lg"
          >
            Previous
          </a>
          {/* )} */}
          {/* Hauríem de passar apartments de SearchList  per saber quantes id hi ha*/}
          {/* {id < 100 && ( */}
          <a
            href={`/apartments/${+id++}`}
            className="btn btn-outline-light btn-lg"
          >
            Next
          </a>
          {/* )} */}
        </div>

        <div className="row mt-2 mb-2">
          <div className="col-sm-12 text-center">
            <ImageToDisplay className="" />
          </div>
        </div>
      </div>
      <img
        className="image1 card-img-top my-3"
        src="https://d1052pu3rm1xk9.cloudfront.net/smw_768/931b0d17a0790afc468279913c86af687fc30eb5d73cc42bbe4a9d16.jpg"
        alt="Error"
      />
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
          {/* No ho puc centrar!*/}
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
