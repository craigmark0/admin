export const filterAllArtists = (artists, search) => {
  if (search === "") {
    return [];
  } else {
    let matchingSongs = artists.filter(artist => {
      //let stringToMatch = `${song.artist}${song.songTitle}`.toLowerCase();
      return artist.artist.toLowerCase().includes(search.toLowerCase());
    });
    return matchingSongs;
  }
};
