import axios from "axios";
const apiRoot = "/apartments";

export default {
  // GET appartment filtered list by place from SearchList
  getApartmentsFiltered: (place) => {
    return axios(`${apiRoot}/${place}`, {
      method: "GET",
    }).catch(function (error) {
      console.log(error);
    });
  },

  // POST apartment form ApartmentForm
  addApartment: (flat) => {
    return axios(`${apiRoot}`, flat, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: {
        location: flat.location,
        numBedrooms: flat.numBedrooms,
        numBathrooms: flat.numBathrooms,
        numParking: flat.numParking,
        monthlyRent: flat.monthlyRent,
        description: flat.description,
        images: flat.images,
      },
    }).catch(function (error) {
      console.log(error);
    });
  },

  // DELETE an apartment from App
  deleteItem: (id) => {
    return (axios(`${apiRoot}/${id}`),
    {
      method: "DELETE",
    }).catch(function (error) {
      console.log(error);
    });
  },
};
