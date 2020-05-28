import axios from "axios";
const apiRoot = "/";

export default {
  //GET list apartments
  getAllApartments: () => {
    return (axios(`${apiRoot}`),
    {
      method: "GET",
    }).catch(function (error) {
      console.log(error);
    });
  },

  // POST apartment form ApartmentForm
  addApartment: (flat) => {
    return axios(`${apiRoot}`, {
      method: "POST",
      data: {
        location: flat.location,
        numBedrooms: flat.numBedrooms,
        numBathrooms: flat.numBathrooms,
        numParking: flat.numParking,
        monthlyRent: flat.monthlyRent,
        description: flat.description,
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

  // GET appartment filtered list by place from SearchList
  getAllApartments: (place) => {
    return axios(`${apiRoot}/${place}`, {
      method: "POST",
    }).catch(function (error) {
      console.log(error);
    });
  },
};
