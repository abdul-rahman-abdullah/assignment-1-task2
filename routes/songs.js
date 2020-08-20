const router = require("express").Router();
const fs = require('fs');


router.get("/", async (req, res) => {
  try {
    const songs = await Song.find({});
    res.status(200).json({ data: songs, error: null });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ data: null, error: "Some server error" });
  }
});

router.get("/get", async (req, res) => {
  try {
    //Just Basic Description
    let songs = [
      {
        name: "Artist Name 1234",
        description: "A short description of the song 1.",
      },
      {
        name: "Artist Name 2",
        description: "A short description of the song 2.",
      },
      {
        name: "Artist Name 3",
        description: "A short description of the song 3.",
      },
      {
        name: "Artist Name 4",
        description: "A short description of the song 4.",
      },
      {
        name: "Artist Name 5",
        description: "A short description of the song 5.",
      },
    ];
    let i = 0;
    fs.readdirSync('public/assets/songs/').forEach(file => {
      songs[i].song = file;
      i++;
    });
    res.status(200).json({ data: songs, error: null });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ data: null, error: "Some server error" });
  }
});

module.exports = router;
