import React, { useState } from "react";

const Test = () => {
  const [inputQuery, setInputQuery] = useState("");

  const searchQuery = (e) => {
    const value = e.target.value;
    setInputQuery(value);
  };

  const handleSearchUser = (e) => {
    e.preventDefault();
    console.log(inputQuery);

    const api = `https://newsapi.org/v2/everything?q=${inputQuery}&apiKey=ef7c1f9e5fdf4bc3b1f5c6c40d8135ff
    `;

    const fetchApi = async () => {
      const response = await fetch(api);
      const data = await response.json();
      console.log(data);
    };
    fetchApi();
  };

  return (
    <div>
      <h1>Test</h1>
      <form>
        <input
          type="text"
          value={inputQuery}
          onChange={searchQuery}
          // disabled={users.length > 0 ? true : false}
          placeholder="Enter repository name..."
        />
        <button
          //   className={search_btn}
          onClick={handleSearchUser}
          disabled={inputQuery.length < 1}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Test;
