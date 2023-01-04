
const clientId = ""
const clientSecret = ""



export const serverCalls = {
    UserID: async () => {
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `grant_type=client_credentials`,
      });
      if (!response.ok) {
          throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
        }
      const { access_token } = await response.json();
      return access_token;
    },
    topTracks: async () => {
      const response = await fetch('https://api.spotify.com/v1/me/top/tracks', {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
      }
      const topTracks = await response.json();
      return topTracks
    },
    Recommendation: async () => {
          // Get the user's top tracks
          const topTracksResponse = await topTracks();
          const topTracks = await topTracksResponse.json();
        
          const seedTracks = topTracks.map((track) => track.id).join(',');
        
          // Use the seed tracks to get recommendations
          const response = await fetch(`https://api.spotify.com/v1/recommendations?seed_tracks=${seedTracks}&fields=images`, {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          });
          const recommendations = await response.json();
          return recommendations
        }
      }


// export async function getUserId() {
//     // Get access token
//     const response = await fetch('https://accounts.spotify.com/api/token', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: `grant_type=client_credentials`,
//     });
//     if (!response.ok) {
//         throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
//       }
//     const { access_token } = await response.json();
    

//   // get user top tracks

// export async function topTracks() {
//     const response = await 
//     fetch('https://api.spotify.com/v1/me/top/tracks', {
//         headers: {
//           Authorization: `Bearer ${access_token}`,
//         },
//       });
//       if (!response.ok) {
//         throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
//       }
//       const topTracks = await response.json();
//     }

// export async function Recommendation() {
//     // Get the user's top tracks
//       const topTracksResponse = await topTracks();
//       const topTracks = await topTracksResponse.json();
    
//       const seedTracks = topTracks.map((track) => track.id).join(',');
    
//       // Use the seed tracks to get recommendations
//       const recommendationsResponse = await fetch(`https://api.spotify.com/v1/recommendations?seed_tracks=${seedTracks}&fields=images`, {
//         headers: {
//           Authorization: `Bearer ${access_token}`,
//         },
//       });
//       const recommendations = await recommendationsResponse.json();
//     }
//   }
      
