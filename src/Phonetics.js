import React from "react";
import "./Phonetics.css";
import Audio from "./Audio.js";

export default function Phonetics(props) {
  return (
    <div className="phonetics">
      {props.phonetics.map(function (phonetic, index) {
        return (
          <div key={index}>
            <span className="text"> {phonetic.text} </span>{" "}
            <span>
              <Audio audio={phonetic.audio} />
            </span>
          </div>
        );
      })}
    </div>
  );
}
