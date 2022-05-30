import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <Container>
        <div>
          <header>
            <h1>📙 Dictionary</h1>
          </header>
          <main>
            <Dictionary />
          </main>
          <footer>
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
