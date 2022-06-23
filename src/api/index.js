import axios from "axios";
// api found at https://rapidapi.com/apidojo/api/realty-in-us/
const BASE_URL = "https://realty-in-us.p.rapidapi.com/";

export const getProperties = async (
  city,
  state,
  sort = "relevance",
  radioClicked
) => {
  console.log("api index file, radioClicked: ", radioClicked);
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
  const url = ` BASE_URL + ${
    radioClicked === "For Rent"
      ? "properties/list-for-rent"
      : "properties/list-for-sale"
  }`;
  console.log("testing conditional url in api index file: ", url);
  try {
    const { data } = await axios.get(url, options);
    console.log("testing conditional for rent/sale fetch: ", data);
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
    // console.log("input: ", data.autocomplete);
    // console.log(response.data);

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
  console.log(
    "index file: ",
    listing_id + ", " + property_id + ", " + prop_status
  );
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
    console.log("api index file property details data: ", data);
    // console.log(response.data);

    return data;
  } catch (error) {
    console.log(error.message);
  }
};
