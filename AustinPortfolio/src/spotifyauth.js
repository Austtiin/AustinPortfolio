// Spotify Authentication Flow in React
// Spotify has a simple authentication flow for web applications.
// We will use it to get the user's access token and use it to fetch the currently playing song.

//Github Secret to hide the Spotify Client ID

const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID || 'your-default-client-id';
const scopes = [
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "streaming"
];

const redirectUri = window.location.origin; // Define the redirect URI

// Step 1: Redirect User to Spotify Login
export function loginWithSpotify() {
  const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes.join(" "))}`;
  window.location.href = authUrl;
}

// Step 2: Get Access Token from Redirect
export function getAccessTokenFromUrl() {
  const hash = window.location.hash.substring(1);
  const params = new URLSearchParams(hash);
  return params.get("access_token");
}
