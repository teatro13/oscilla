import { Scenarist } from '/scenarist/index.js';

window .onload = () => {

const scenarist = new Scenarist ();
scenarist .scenario ( {

name: 'oscilla',
paths: [

'/typist/output.js',
'/typist/stage.js',
'/typist/input.js',
'/typist/input/script.js',
'/typist/input/action.js',
'/typist/input/ws.js',
'/maitre/prompt.js',
'/typist/prompt.js',
'/oscilla/csound/pitch.js',
'/oscilla/csound/detune.js',
'/oscilla/csound/instrument.js',
'/oscilla/csound/wave.js',
'/oscilla/csound/envelope.js'

],
setting: {

play: 'oscilla.js',
ws: {

scheme: 'ws',
host: 'localhost',
port: 1300,
target: 'ws'

},
keyboard: {

pitch: "qasedrfjikolp;']",
detune: 'gh',
wave: '1234567',
envelope: 'zZxXcCvVbBmM'

}

},
establish: true

} )
.then ( () => {

scenarist .display = 'oscilla';

} );

};