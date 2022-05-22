import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Container>
      <div>
        <header className="App-header">
          <h1>📙 Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a href="https://github.com/dominikawalska">Dominika Walska</a>
          </small>
        </footer>
      </div>
    </Container>
  );
}
