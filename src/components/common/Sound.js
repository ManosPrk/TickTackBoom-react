import React from 'react';
// import dasdsa from '../../assets/audio/'
function Sound() {
    const testAudio = new Audio('/test.mp3')

    const start = () => {
        testAudio.play()
    }

    return (
        <div>
            <button onClick={start}>Play</button>
        </div>
    );
}

export default Sound;