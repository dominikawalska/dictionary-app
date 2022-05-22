import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="dictionary">
      <h1>📙 Dictionary</h1>
      <Form onSubmit={search}>
        <input
          className="search"
          type="search"
          placeholder="Enter a word"
          onChange={updateKeyword}
        ></input>
        <Button type="Submit">Submit</Button>
      </Form>
      <Results results={results} />
    </div>
  );
}
