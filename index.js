
const musicContainer = document.querySelector('.current-music-icon');
const leftBtn = document.querySelector('.skip-left');
const playBtn = document.querySelector('.play');
const rightBtn = document.querySelector('.skip-right');
const audio = document.querySelector('#audio');
const songTitle = document.querySelector('.song-title');
const cover = document.querySelector('.cover');



// songs name

const songs = ['Essense - Wizkid ft Tems','For Days - Buju','Never Stooped - Buju', 'Overdoze - Marvin Stars', 'Ayra-Starr-Beggie-Beggie-ft-CKay-(TrendyBeatz.com)','Chike-Out-of-Love','Elevation-Worship-Maverick-City-Jireh-Ft.-Chandler-Moore-Naomi-Raine 2', 'Confident __ TrendyBeatz.com','Asake-Peace-Be-Unto-You-(JustNaija.com)','Palazzo __ TrendyBeatz.com']
 let songIndex = 2

 loadSong(songs[songIndex])

//  update song details
function loadSong(song){
    songTitle.innerText = song
    audio.src = `Music/${song}.mp3`
}
function playSong() {
    musicContainer.classList.add('play-icon');
   
    document.querySelector('.change').src = './img/pause.svg';
    document.querySelector('.speaker-container').style.visibility = 'visible';

audio.play()

    
}
function pauseSong() {
    musicContainer.classList.remove('play-icon')
    document.querySelector('.change').src = './img/play.svg';
    document.querySelector('.speaker-container').style.visibility = 'hidden';
 
 

    audio.pause()
}

// next and prev function

function prev(){
songIndex--

if (songIndex < 0){
    songIndex = songs.length - 1


}
loadSong(songs[songIndex])
playSong()
}
function next(){
    songIndex++

if (songIndex > songs.length - 1){
    songIndex = 0;


}
loadSong(songs[songIndex])
playSong()
    
}


// event listeners

playBtn.addEventListener('click', () => {
const isPlaying = musicContainer.classList.contains('play-icon')

if (isPlaying) {
pauseSong();

}
else{
    playSong();
}

})

// change songs

leftBtn.addEventListener('click', prev)
rightBtn.addEventListener('click', next)

