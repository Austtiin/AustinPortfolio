import { useEffect, useState } from "react";
import { loginWithSpotify, getAccessTokenFromUrl } from "./spotifyauth";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("spotifyToken");
    const newToken = getAccessTokenFromUrl();

    if (newToken) {
      setToken(newToken);
      localStorage.setItem("spotifyToken", newToken);
      window.history.pushState({}, null, "/"); // Remove token from URL
    } else if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      {!token ? (
        <button onClick={loginWithSpotify} className="bg-green-500 p-4 rounded-md">
          Login with Spotify
        </button>
      ) : (
        <h1>You're logged in! Now Playing feature will work.</h1>
      )}
    </div>
  );
}

export default App;
