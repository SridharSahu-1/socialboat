import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./Content.css";
import { BiErrorCircle } from "react-icons/bi";

export default function Content({ searchText }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  async function fetchApi() {
    try {
      let items = await fetch(
        `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${searchText}&numResults=9`
      );
      if (!items.ok) {
        throw new Error("Network response was not ok");
      }
      let result = await items.json();
      setData(result.results);
    } catch (err) {
      setError(err.message);
      console.log("Error occurred:", err);
    }
  }

  useEffect(() => {
    if (searchText !== "") {
      fetchApi();
    } else {
      setData([]);
    }
  }, [searchText]);

  return (
    <>
      {error ? (
        <div className="error_message">
          <BiErrorCircle />
          <p className="error_text">{error}</p>
        </div>
      ) : (
        <Card data={data} />
      )}
    </>
  );
}
