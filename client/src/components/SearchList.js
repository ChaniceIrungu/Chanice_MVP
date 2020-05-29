import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import api from "../utils/api";
import ApartmentDisplay from "../components/ApartamentDisplay";

export default function SearchList(props) {
  const [apartments, setApartments] = useState([]);
  const { search } = useLocation();

  const getApartmentsFiltered = (search) => {
    api.getApartmentsFiltered(search).then((response) => {
      setApartments(response);
    });
  };

  useEffect(() => {
    getApartmentsFiltered();
  }, [search]);

  return (
    <div>
      {console.log(apartments)}
      <div>
        {!!apartments?.length === 0 && (
          <div>
            <i className="fas fa-exclamation-triangle text-light fa-5x my-4"></i>
            <div className="alert alert-light my-4" role="alert">
              {`Sorry, there are no apartments to show in ${search}!`}
            </div>
          </div>
        )}
      </div>
      <ApartmentDisplay />
      {/* <ul>
        {apartments.map((apartment) => (
          <li
            key={apartment.id}
            className=" list-group-item d-flex justify-content-between"
          >
            <span>
              <strong>
                This luxurious apartment is in {apartment.location}. It has {""}
                {apartment.number_of_bedrooms} bedrooms and{" "}
                {apartment.parking_space} parking space(s). Rent is{" "}
                {apartment.monthly_rent}
                /month.
              </strong>
              <img
                src={apartment.image}
                alt=""
                className="img-fluid col-md-6 px-0"
              />
            </span>
          </li>
        ))}
      </ul> */}
    </div>
  );
}
