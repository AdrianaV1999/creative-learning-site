import React, { useState } from "react";
import search from "../../assets/search.png";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ data }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState(data ? data : "");
  const onSearchHandler = (e) => {
    e.preventDefault();
    navigate("/course-list/" + input);
  };

  return (
    <form
      onSubmit={onSearchHandler}
      className="max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-500/20 rounded-full"
    >
      <img src={search} alt="search" className="md:w-11 w-5 h-auto px-3 " />
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
        placeholder="Search for courses"
        className=" w-full h-full outline-none text-gray-600 rounded-full"
      />
      <button
        type="submit"
        className="bg-purple-800 text-white md:px-10 px-7 md:py-3 py-2 mx-1 rounded-full"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
