const playlist = [
    'backGM/call-of-the-sea-track-by-brolefilmer-12314.mp3',
    'backGM/chanson-dx27amour-faure-anneliese-von-koenig-mezzo-125025.mp3',
    'backGM/cherubino2-noce-di-figaro-mozart-anneliese-von-koenig-mezzo-127457.mp3',
    'backGM/habanera-carmen-george-bizet-176574.mp3',
    'backGM/la-mort-ophelia-saint-saens-anneliese-von-koenig-mezzo-125024.mp3',
    'backGM/les-berceux-faure-anneliese-von-koenig-mezzo-127461.mp3',
    'backGM/verona-soprano-classic-orchestra-amp-choir-1806.mp3',
    'backGM/voi-che-sapete-cherubino-figaro-mozart-anneliese-von-koenig-mezzo-127456.mp3'
];

const audio = document.getElementById('background-audio');
const logo = document.getElementById('logo-audio-toggle');

let shuffled = [...playlist];
let current = 0;
let isPlaying = false;

// Shuffle helper
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle and load first track
shuffle(shuffled);
audio.src = shuffled[current];

// When song ends, go to next and reshuffle if needed
audio.addEventListener('ended', () => {
    current = (current + 1) % shuffled.length;
    if (current === 0) shuffle(shuffled);
    audio.src = shuffled[current];
    audio.play();
});

// Click logo to play/pause
logo.addEventListener('click', () => {
    if (!isPlaying) {
    audio.play().then(() => {
        isPlaying = true;
        logo.classList.add('playing');
    }).catch(err => {
        console.warn('Autoplay blocked:', err);
    });
    } else {
    audio.pause();
    isPlaying = false;
    logo.classList.remove('playing');
    }
});