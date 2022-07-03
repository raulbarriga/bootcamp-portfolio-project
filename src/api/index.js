import axios from "axios";
// api found at https://rapidapi.com/apidojo/api/realty-in-us/
const BASE_URL = "https://realty-in-us.p.rapidapi.com/";

export const getProperties = async (city, state, sort, radioClicked) => {
  const options = {
    params: {
      state_code: state,
      city: city,
      offset: "0",
      limit: "200",
      sort: sort,
    },
    headers: {
      "X-RapidAPI-Host": "realty-in-us.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.REACT_APP_REALTY_API_KEY_DEFAULT_TWO,
    },
  };
  const url = `${BASE_URL}${
    radioClicked === "For Rent"
      ? "properties/list-for-rent"
      : "properties/list-for-sale"
  }`;

  try {
    const { data } = await axios.get(url, options);

    return data;
  } catch (error) {
    console.log(error.message);
  }
};

// for autocomplete suggestions, pass city, state
export const inputAutoComplete = async (input) => {
  const url = BASE_URL + "locations/auto-complete";
  const options = {
    params: {
      input: input,
    },
    headers: {
      "X-RapidAPI-Host": "realty-in-us.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.REACT_APP_REALTY_API_KEY_2,
    },
  };

  try {
    const { data } = await axios.get(url, options);

    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getPropertyDetails = async (
  listing_id,
  property_id,
  prop_status
) => {
  const url = BASE_URL + "properties/detail";
  const options = {
    params: {
      listing_id: listing_id,
      prop_status: prop_status,
      property_id: property_id,
    },
    headers: {
      "X-RapidAPI-Host": "realty-in-us.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.REACT_APP_REALTY_API_KEY_DEFAULT_TWO,
    },
  };

  try {
    const { data } = await axios.get(url, options);

    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getPropertyDetailsv2 = async (property_id) => {
  const url = BASE_URL + "properties/v2/detail";
  const options = {
    params: {
      property_id: property_id,
    },
    headers: {
      "X-RapidAPI-Host": "realty-in-us.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.REACT_APP_REALTY_API_KEY_DEFAULT_TWO,
    },
  };

  try {
    const { data } = await axios.get(url, options);

    return data;
  } catch (error) {
    console.log(error.message);
  }
};
