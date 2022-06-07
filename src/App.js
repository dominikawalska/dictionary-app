import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <Container fluid="sm">
        <div>
          <header className="w-auto p-5">
            <h1>Dictionary</h1>
          </header>

          <div className="dictionary">
            <main>
              <Dictionary />
            </main>
          </div>
          <footer className="w-auto p-5">
            <small>
              Coded by{" "}
              <a href="https://github.com/dominikawalska">Dominika Walska</a>
            </small>
          </footer>
        </div>
      </Container>
    </div>
  );
}
