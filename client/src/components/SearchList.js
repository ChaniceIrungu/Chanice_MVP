import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function SearchList(props) {
  const [apartments, setApartments] = useState([]);
  const { search } = useLocation();
  const getAllApartments = () => {
    console.log(search);
    fetch(`/apartments${search}`)
      .then((response) => response.json())
      .then((response) => {
        setApartments(response);
      });
  };
  useEffect(() => {
    getAllApartments();
  }, [search]);
  return (
    <div>
      <ul className="my-3 list-group text-black">
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
      </ul>
    </div>
  );
}
