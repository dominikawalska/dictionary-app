import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photo);
  if (props.photos) {
    return (
      <section className="photos">
        <Row>
          {props.photos.map(function (photo, index) {
            console.log(photo);
            return (
              <Col md={4} key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt={photo.alt}
                  />
                </a>
              </Col>
            );
          })}{" "}
        </Row>
      </section>
    );
  } else {
    return null;
  }
}
