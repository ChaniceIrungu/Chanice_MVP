const apiRoot = "/";

export default {
  // POST METHOD
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
};
