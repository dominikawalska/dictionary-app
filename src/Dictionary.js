import React, { useState } from "react";
import "./Dictionary.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
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
        <Button type="Submit" className="btn search-button">
          Submit
        </Button>
      </Form>
    </div>
  );
}
