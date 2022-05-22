import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div>
      <Container>
        <header className="App-header"></header>
        <Dictionary />
      </Container>
    </div>
  );
}
