

export function getCards() {
    return ['ΒΙΟ', 'ΒΕ', 'ΡΑΣ', 'ΡΙ', 'ΓΡΑ', 'ΔΑ', 'ΚΟΙ', 'ΚΕ', 'ΝΤΕ', 'ΝΟ', 'ΤΡΟ', 'ΤΙ', 'ΣΤΑ', 'ΣΕ', 'ΛΟΣ', 'ΛΙ', 'ΒΟΣ'];
}

export function getDiceSide() {
    const sides = ['TICK', 'TACK', 'BOOM']
    let newSide = sides[Math.floor(Math.random() * sides.length)];
    return newSide;
}

export function getRandomSecs() {
    return Math.floor(Math.random() * (40 - 10) + 10);
}

// export function startTimer(randomExplodingTime) {
//     let bombTickAudio = createAudioElement("./assets/audio/tick.mp3");
//     // randomExplodingTime = 0.5;
//     bombTickAudio.loop = true;
//     let bombExplodingAudio = createAudioElement("./assets/audio/boom.mp3", false);
//     let ticking = false;
//     let exploded = false;

//     return new Promise((res, rej) => {
//         bombTickAudio.play().then(() => {
//             ticking = true;
//             setTimeout(() => {
//                 bombTickAudio.pause();
//                 bombExplodingAudio.play();
//                 exploded = true;
//             }, randomExplodingTime * 1000);
//         })
//     })
// }

// export function createAudioElement(src, loop = true) {
//     let newSound = document.createElement('audio');
//     console.log(src);
//     newSound.src = src;
//     newSound.loop = loop;
//     newSound.play()
//     return newSound;
// }