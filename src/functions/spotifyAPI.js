export async function getToken(clientId, clientSecret) {
    const result = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
      },
      body: "grant_type=client_credentials",
    });
  
    const data = await result.json();
    return data.access_token;
  }

  export async function getTrack(token) {
    const result = await fetch(
      `https://api.spotify.com/v1/tracks/3gDPjU8URd9mtZhBBYwI2R?market=ES`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    );
    const data = await result.json();
    console.log(data);
    return data.href;
  }