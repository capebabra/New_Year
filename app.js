function playMusic(musicFile) {
    var audio = document.getElementById("backgroundMusic");
    audio.src = musicFile;
    audio.play();
}
