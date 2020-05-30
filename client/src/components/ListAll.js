import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";

export default function ListAll() {
  const [allList, setList] = useState([]);

  const getAllApartments = () => {
    api.getAllApartments().then((response) => {
      console.log(response.data);
      setList(response.data);
    });
  };

  useEffect(() => {
    getAllApartments();
  }, []);

  return (
    <div className="card my-4">
      <ul className="container mt-3">
        {allList.map((apartment) => (
          <li key={apartment.id} className="list-group-item">
            <span>
              <Link to={`/search/apartment/${apartment.id}`}>
                <img src={apartment.image} alt="" className="img-fluid" />
                <div>
                  <i className="fas fa-bed mx-4"></i>
                  {apartment.numBedrooms}
                  <i className="fas fa-bath mx-4"></i>
                  {apartment.numBathrooms}
                  <i className="fas fa-car mx-4"></i>
                  {apartment.numParking}
                  <i className="fas fa-coins mx-4"></i>
                  {apartment.monthlyRent}
                </div>
              </Link>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
