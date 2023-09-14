import React, { useState } from "react";

function FetchAPi() {
  const [data, setData] = useState([]);

  const apiGet = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  return (
    <div>
      <h2>FETCHING APIs</h2>
      <button onClick={apiGet}>Fetch Api</button>
      <br />
      <h4>TITLE: {JSON.stringify(data.title)} </h4>
      <h4>ID: {JSON.stringify(data.userId)} </h4>
    </div>
  );
}

export default FetchAPi;
