import React from 'react'

export default function keypad(props) {
    return (
        <div id="drum-pad-container">
            <div className="row">
                <div id="heater-1" className="drum-pad" onClick={props.handleClick}>Q<audio id="Q" className="clip" src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'/></div>
                <div id="heater-2" className="drum-pad" onClick={props.handleClick}>W<audio id="W" className="clip" src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'/></div>
                <div id="heater-4" className="drum-pad" onClick={props.handleClick}>E<audio id="E" className="clip" src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'/></div>
            </div>
            <div className="row">
                <div id="heater-6" className="drum-pad" onClick={props.handleClick}>A<audio id="A" className="clip" src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'/></div>
                <div id="Dsc-Oh" className="drum-pad" onClick={props.handleClick}>S<audio id="S" className="clip" src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'/></div>
                <div id="Kick-n-Hat" className="drum-pad" onClick={props.handleClick}>D<audio id="D" className="clip" src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'/></div>
            </div>
            <div className="row">
                <div id="Cev-H2" className="drum-pad" onClick={props.handleClick}>Z<audio id="Z" className="clip" src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'/></div>
                <div id="Chord-1" className="drum-pad" onClick={props.handleClick}>X<audio id="X" className="clip" src='https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'/></div>
                <div id="Chord-2" className="drum-pad" onClick={props.handleClick}>C<audio id="C" className="clip" src='https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'/></div>
            </div>
        </div>
    )
}
