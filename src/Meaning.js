import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>{" "}
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index} className="text">
              <div className="definition"> {definition.definition} </div>
              <div className="example">
                <Example example={definition.example} />
              </div>
            </div>
          );
        })}{" "}
        <Synonyms synonyms={props.meaning.synonyms} />
      </section>
    </div>
  );
}
