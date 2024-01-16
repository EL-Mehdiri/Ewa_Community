"use client";
import { useState } from "react";
import axios from "axios";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/search/${query}`);
      console.log(response.data);
      onSearch(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      console.log(query);

      handleSearch();
    }
  };

  return (
    <div className="relative">
      <input
        type="search"
        placeholder="Search"
        className="w-full p-2  text-center rounded-full bg-gray-200"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button
        onClick={handleSearch}
        className="absolute bg-transparent hover:bg-transparent left-1 top-1/2 -translate-y-1/2 p-2  rounded-full"
      >
        <svg
          className="w-[20px] h-[20px] fill-[#979797]"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
