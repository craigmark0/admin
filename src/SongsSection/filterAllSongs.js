export const filterAllSongs = (songs, search) => {
  if (search == "") {
    return songs;
  } else {
    let matchingSongs = songs.filter(song => {
      console.log(song);
      let stringToMatch = `${song.artist}${song.songTitle}`.toLowerCase();
      return stringToMatch.includes(search.toLowerCase());
    });
    return matchingSongs;
  }
};
