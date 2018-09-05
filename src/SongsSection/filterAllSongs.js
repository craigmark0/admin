export const filterAllSongs = (songs, search) => {
  if (search === "") {
    return [];
  } else {
    let matchingSongs = songs.filter(song => {
      let stringToMatch = `${song.artist}${song.songTitle}`.toLowerCase();
      return stringToMatch.includes(search.toLowerCase());
    });
    return matchingSongs;
  }
};
