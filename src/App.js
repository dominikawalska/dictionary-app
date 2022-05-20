import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Dictionary from "./Dictionary";

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
