import { serverCalls } from "./api";


export default async (_, res) => {
    const response = await recommendations()
  
    if (response.status === 204 || response.status > 400) {
      return res.status(200).json({ isPlaying: false })
    }
  
    const song = await response.json()
    const album = song.item.album.name
    const albumImageUrl = song.item.album.images[0].url
    const songUrl = song.item.external_urls.spotify
  
    res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30')
  
    return res.status(200).json({
      album,
      albumImageUrl,
      songUrl,
    })
  }