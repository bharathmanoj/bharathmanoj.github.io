const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((music) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = music;

  btn.addEventListener("click", () => {
    stopSongs();

    document.getElementById(music).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
  sounds.forEach((music) => {
    const song = document.getElementById(music);

    song.pause();
    // song.currentTime = 0; //dought
  });
}
