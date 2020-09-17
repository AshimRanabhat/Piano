import React from 'react';
import './piano.css';

function PianoKey(props) {
  return (
    <button
      type="button"
      className={props.keyType}
      onPointerDown={props.startNote}
      onPointerUp={props.endNote}
      onPointerLeave={props.endNote}
      name={props.name}
    ></button>
  );
}

function getKeysRepresentation() {
  //C1- white key, C#1- black key
  // except the first 3 and the last key, the keys follow the pattern C1..B1, C2..B2
  let keysRepresentation = ['A0', 'A#0', 'B0'];
  const keyPattern = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B',
  ];
  for (let i = 1; i <= 7; i++) {
    keyPattern.forEach((currentNote) =>
      keysRepresentation.push(currentNote + i)
    );
  }
  keysRepresentation.push('C8');
  return keysRepresentation;
}

function getKeys(keysRepresentation, props) {
  const keys = keysRepresentation.map((currentKey) => {
    let keyType = 'white-key';

    if (currentKey.length === 3) {
      keyType = 'black-key';
    }

    return (
      <div className="key-wrapper" key={currentKey}>
        <PianoKey
          keyType={keyType}
          name={currentKey}
          startNote={props.startNote}
          endNote={props.endNote}
        ></PianoKey>
      </div>
    );
  });
  return keys;
}

function Piano(props) {
  const keysRepresentation = getKeysRepresentation();
  const keys = getKeys(keysRepresentation, props);

  return <div className="piano">{keys}</div>;
}

export default Piano;
