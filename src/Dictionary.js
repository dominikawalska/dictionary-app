import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
    console.log(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApi = "563492ad6f917000010000019c8aa44589ad4a8589c21f66fe2eecf3";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let header = { Authorization: `Bearer ${pexelsApi}` };
    axios.get(pexelsUrl, { headers: header }).then(handlePexelsResponse);
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
                size="lg"
              ></input>
            </Col>{" "}
            <Col sm={3}>
              <div className="search-button">
                <Button type="submit" className="button py-2 px-5">
                  Submit
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
