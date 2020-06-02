import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";

export default function ImageToDisplay() {
  const [imageToDisplay, setImageToDisplay] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    api.getOneApartmentImages(id).then((response) => {
      setImageToDisplay(response.data);
    });
  }, [id]);

  return (
    <div>
      {console.log(imageToDisplay)}
      {console.log(imageToDisplay[0].img)}
      <img src={imageToDisplay[0]} />;
    </div>
  );
}
