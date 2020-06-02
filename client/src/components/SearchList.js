import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import api from "../utils/api";
import SearchForm from "./SearchForm";

export default function SearchList(props) {
  const [apartments, setApartments] = useState([]);
  // The useLocation hook returns the location object that represents the current URL. Like a useState that returns a new location whenever the URL changes.
  const { search } = useLocation();

  const getApartmentsFiltered = () => {
    api.getApartmentsFiltered(search).then((response) => {
      setApartments(response.data);
    });
  };

  // It's like ComponentDidMount, it accepts a function which can pehuhrform any side effects after every completed render. The second argument is the array of values that the effect depends on.
  useEffect(() => {
    getApartmentsFiltered();
  }, [search]);

  return (
    <div>
      <div className="d-flex flex-row">
        <div className="col-4">
          <SearchForm className="w-100" />
        </div>
        <div className="col-8">
          {" "}
          <div>
            {!apartments?.length ? (
              <div>
                <i className="fas fa-exclamation-triangle text-light fa-5x my-4"></i>
                <div className="alert alert-light my-4" role="alert">
                  {`Sorry, there are no apartments to show in ${search}!`}
                </div>
              </div>
            ) : (
              <div className="card">
                <ul className="container mt-3">
                  {apartments.map((apartment) => (
                    <li
                      key={apartment.id}
                      className="list-group-item d-flex justify-content-between"
                    >
                      <Link
                        to={`/apartments/${apartment.id}`}
                        apartments={apartments}
                      >
                        <span>
                          <img
                            src="/house2.jpg"
                            alt="ERROR"
                            className="img-fluid w-25 mr-5"
                          />
                          <i className="fas fa-bed mx-4"></i>
                          {apartment.numBedrooms}
                          <i className="fas fa-bath mx-4"></i>
                          {apartment.numBathrooms}
                          <i className="fas fa-car mx-4"></i>
                          {apartment.numParking}
                          <i className="fas fa-coins mx-4"></i>
                          {apartment.monthlyRent}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
