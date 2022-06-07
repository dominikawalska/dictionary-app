import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
    <div>
      <section>
        <Form onSubmit={search}>
          <div className="question">What word are you looking for?</div>
          <Row>
            <Col sm={9}>
              <input
                className="search"
                type="search"
                placeholder="Enter a word"
                onChange={updateKeyword}
              ></input>
            </Col>{" "}
            <Col sm={3}>
              <div className="search-button">
                <Button type="Submit" variant="secondary" className="py-2 px-5">
                  Submit
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </section>
      <Results results={results} />
    </div>
  );
}
