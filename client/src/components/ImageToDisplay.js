import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";

export default function ImageToDisplay() {
  let { id } = useParams();
  const [imagesToDisplay, setImageToDisplay] = useState([]);

  useEffect(() => {
    api.getOneApartmentImages(id).then((response) => {
      console.log(response.data);
      setImageToDisplay(response.data[0].img);
    });
  }, [id]);

  return (
    <div>
      {console.log(imagesToDisplay)}
      <img
        src={imagesToDisplay} /*{`../../public/img/${imagesToDisplay}`}*/
        alt="Error"
        className="image1 card-img-top my-4"
      />
      ;
    </div>
  );
}
