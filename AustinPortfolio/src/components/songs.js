export const songs = [
    "https://open.spotify.com/track/2kvlpIO6c9yvKAzk2KF0IS?si=8b6ebac6922d4f2d",
  ];
  
  export function getRandomSong() {
    return songs[Math.floor(Math.random() * songs.length)];
  }
  