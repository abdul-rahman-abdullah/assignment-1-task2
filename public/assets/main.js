let songs = null;
const getSongs = async () => {
  const res = await fetch("/songs/get");
  const data = await res.json();
  if (data.data.length > 0) {
    let temp = data.data;
    songs = temp;
    document.getElementById("next-song").click(); 
    
  }
};
getSongs();

let NEXT = document.getElementById("next-song");
NEXT.addEventListener("click", (e) => {
  let songName = document.getElementById("song-name");
  let songDescp = document.getElementById("song-description");
  let CurrentElement = document.getElementById("current");
  let current = parseInt(CurrentElement.value);
  document.getElementById("my-audio").setAttribute("src", `assets/songs/${songs[current].song}`);
  if (current >= songs.length - 1) {
    songName.innerHTML = songs[current].name;
    songDescp.innerHTML = songs[current].description;
    current = 0;
    CurrentElement.value = current;

  } else {
    
    songName.innerHTML = songs[current].name;
    songDescp.innerHTML = songs[current].description;
    current = current + 1;
    CurrentElement.value = current;
  }
});
