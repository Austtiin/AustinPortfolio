import { useEffect, useState } from "react";

export function NowPlaying() {
  const [song, setSong] = useState(null);
  const token = localStorage.getItem("spotifyToken");

  useEffect(() => {
    async function fetchNowPlaying() {
      if (!token) return;

      try {
        const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (data && data.item) {
          setSong({
            name: data.item.name,
            artist: data.item.artists.map((artist) => artist.name).join(", "),
            albumArt: data.item.album.images[0].url,
            url: data.item.external_urls.spotify,
          });
        }
      } catch (error) {
        console.error("Error fetching song:", error);
      }
    }

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 5000); // Refresh every 5 sec

    return () => clearInterval(interval);
  }, [token]);

  if (!song) return <p className="text-gray-400">No song playing...</p>;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#181818] p-4 text-white shadow-lg">
      <p className="text-center text-gray-400 text-sm">Now Playing</p>

      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center space-x-4">
          <img src={song.albumArt} alt="Album Cover" className="w-12 h-12 rounded-md" />
          <div>
            <h3 className="text-sm font-semibold">{song.name}</h3>
            <p className="text-xs text-gray-400">{song.artist}</p>
          </div>
        </div>

        <div>
          <a href={song.url} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
            Listen on Spotify
          </a>
        </div>
      </div>
    </div>
  );
}
