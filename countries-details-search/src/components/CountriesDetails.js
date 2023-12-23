"use client";
import { useState, useEffect } from "react";

function CountriesDetails() {
  const [searchText, setSearchText] = useState("");
  const [allCountries, setAllCountries] = useState(null);
  const [countryData, setCountryData] = useState(null);
  const [errorText, setErrorText] = useState("");

  const fetchAllCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v2/all");
      const data = await response.json();
      setAllCountries(data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  useEffect(() => {
    fetchAllCountries();
  }, []);

  const fetchCountryDetails = () => {
    const country = allCountries.find(
      (object) => object.name.toLowerCase() === searchText.toLowerCase()
    );

    if (country) {
      setCountryData(country);
    } else {
      setCountryData(null);
      alert("Country not found!");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-96 w-2/4 mt-16">
        {countryData && (
          <div className="flex justify-center items-center gap-20">
            <img
              className="h-96 w-96 object-contain"
              src={countryData.flag}
              alt={`${countryData.name} flag`}
            />
            <div>
              <p>{`Country: ${countryData.name}`}</p>
              <p>Native Name: {countryData.nativeName}</p>
              <p>Capital: {countryData.capital}</p>
              <p>Population: {countryData.population.toLocaleString()}</p>
              <p>Region: {countryData.region}</p>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col justify-center items-center gap-5 mt-10">
        <h1 className="text-4xl font-black">Search Country Details</h1>
        {errorText && <p className="text-red-500 text-sm">{errorText} </p>}
        <input
          className="p-2 rounded border-2 border-solid border-black"
          type="text"
          placeholder="Enter country name"
          value={searchText}
          onChange={(e) => {
            setErrorText("");
            setSearchText(e.target.value);
          }}
        />

        <button
          className="p-1  border-2 border-solid border-black rounded hover:bg-gray-200"
          onClick={() => {
            searchText
              ? fetchCountryDetails()
              : setErrorText("Enter the country name!");
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default CountriesDetails;
