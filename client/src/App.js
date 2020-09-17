import React from 'react';
import './App.css';
import Piano from './components/piano/piano';
import * as Tone from 'tone';

function App() {
  const synth = new Tone.PolySynth(Tone.Synth).toDestination();

  function startNote(event) {
    const key = event.target.name;
    synth.triggerAttack(key);
  }

  function endNote(event) {
    const key = event.target.name;
    synth.triggerRelease(key);
  }

  return (
    <div className="App">
      <Piano startNote={startNote} endNote={endNote}></Piano>
    </div>
  );
}

export default App;
