import axios from "axios";

const BASE_URL = "https://realty-in-us.p.rapidapi.com/";

export const getForSale = async (city, state, sort = "relevance") => {
  console.log("index file: ", city+ ", " + state + ", sort: " + sort);
  const url = BASE_URL + "properties/list-for-sale";
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
      "X-RapidAPI-Key": process.env.REACT_APP_REALTY_API_KEY_2,
    },
  };

  try {
    const { data } = await axios.get(url, options);
    console.log("api index file data: ", data);
    // console.log(response.data);

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