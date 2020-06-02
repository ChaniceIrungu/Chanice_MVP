import axios from "axios";
const apiRoot = "/apartments";

export default {
  // GET all the apartments
  getAllApartments: () => {
    return axios.get(`${apiRoot}`).catch(function (error) {
      console.log(error);
    });
  },

  // GET appartment filtered list by place from SearchList
  getApartmentsFiltered: (search) => {
    return axios.get(`${apiRoot}/${search}`).catch(function (error) {
      console.log(error);
    });
  },

  // GET one apartment
  getOneApartment: (id) => {
    return axios.get(`${apiRoot}/${id}`).catch(function (error) {
      console.log(error);
    });
  },

  // GET one apartment images
  getOneApartmentImages: (id) => {
    return axios.get(`${apiRoot}/${id}/images`).catch(function (error) {
      console.log(error);
    });
  },

  // POST apartment form ApartmentForm
  addApartment: (flat) => {
    return axios.post(`${apiRoot}`, flat).catch(function (error) {
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
