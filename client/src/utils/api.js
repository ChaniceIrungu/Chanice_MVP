const apiRoot = "/";

export default {
  // POST METHOD from ApartmentForm
  addApartment: async (flat) => {
    let response = await fetch(apiRoot, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        location: flat.location,
        numBedrooms: flat.numBedrooms,
        numBathrooms: flat.numBathrooms,
        numParking: flat.numParking,
        rent_monthly: flat.rent_monthly,
        description: flat.description,
      }),
    });
    return response.json();
  },

  // DELETE METHOD from App how to use id
  deleteItem: async (id) => {
    let response = await fetch(apiRoot, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    return response.json();
  },

  // GET appartment filtered list by place from SearchList how to use place
  getAllApartments: async (place) => {
    let response = await fetch(apiRoot, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    });
    return response.json();
  },
};
