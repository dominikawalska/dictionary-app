import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  return (
    <div>
      {props.phonetics.map(function (phonetic, index) {
        return (
          <div key={index}>
            <div> {phonetic.text} </div>
            <ReactAudioPlayer src={phonetic.audio} onPlay controls />
          </div>
        );
      })}
    </div>
  );
}
