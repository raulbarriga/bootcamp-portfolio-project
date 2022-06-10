import axios from "axios";

const BASE_URL = "https://realty-in-us.p.rapidapi.com/";
// for autocomplete suggestions, pass city, state 
export const getForSale = async (city, state) => {
  const url = BASE_URL + "properties/list-for-sale";
  const options = {
    //   method: "GET",
    //   url: url,
    params: {
      state_code: state,
      city: city,
      offset: "0",
      limit: "200",
      sort: "relevance",
    },
    headers: {
      "X-RapidAPI-Host": "realty-in-us.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.REACT_APP_REALTY_API_KEY,
    },
  };

  try {
    const { data } = await axios.get(url, options);
    // console.log(data);
    // console.log(response.data);

    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const inputAutoComplete = async (input) => {
  const url = BASE_URL + "locations/auto-complete";
  const options = {
    params: {
      input: input,
    },
    headers: {
      "X-RapidAPI-Host": "realty-in-us.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.REACT_APP_REALTY_API_KEY,
    },
  };
  
  try {
    const { data } = await axios.get(url, options);
    console.log("input: ", data);
    // console.log(response.data);

    return data;
  } catch (error) {
    console.log(error.message);
  }
};
