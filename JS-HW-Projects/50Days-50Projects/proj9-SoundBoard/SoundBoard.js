// const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

// sounds.forEach((music) => {
//   const btn = document.createElement("button");
//   btn.classList.add("btn");

//   btn.innerText = music;

//   btn.addEventListener("click", () => {
//     stopSongs();

//     document.getElementById(music).play();
//   });

//   document.getElementById("buttons").appendChild(btn);
// });

// function stopSongs() {
//   sounds.forEach((music) => {
//     const song = document.getElementById(music);

//     song.pause();
//     // song.currentTime = 0; //dought
//   });
// }

// jquery

const $sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

$sounds.forEach((music) => {
  const $btn = document.createElement("button");
  // const $btn = $(document).add("<button>");
  $btn.classList.add("btn");
  // $("button").addClass("btn");

  $btn.innerText = music;

  $btn.addEventListener("click", () => {
    // $("button").click(function () {
    stopSongs();

    document.getElementById(music).play();
  });

  document.getElementById("buttons").appendChild($btn);
  // $("#buttons").appendChild($btn);
  $("#buttons").append($btn);
});

function stopSongs() {
  $sounds.forEach((music) => {
    const song = document.getElementById(music);

    song.pause();
  });
}
