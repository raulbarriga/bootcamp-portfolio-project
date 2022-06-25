const [listingsData, setListingsData] = useLocalStorage(
    "localAllProperties",
    JSON.stringify([])
  );
  // select to fetch either for sale/rent data
  const [saleRentRadio, setSaleRentRadio] = useLocalStorage(
    "forSaleORent",
    JSON.stringify("For Sale")
  );
  // to pass to fetchProperties
  // options: price_low, price_high, relevance
  const [selectedSort, setSelectedSort] = useState("relevance");

  // for sort button fetch data (need current city & state)
  const [currentCityNState, setCurrentCityNState] = useLocalStorage(
    "selectedCityAndState",
    JSON.stringify([])
  );

  // 3 states for pagination
  const [dataLength, setDataLength] = useState(0);
  const [propertiesPerPage, setPropertiesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);