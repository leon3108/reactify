import { StaticImageData } from 'next/image'
import { createContext } from 'react'

export interface Song {
  imageUrl: string | StaticImageData
  artistName: string
  songName: string
}

export interface CurrentSongContextProps {
  currentSong: Song
  setCurrentSong: React.Dispatch<React.SetStateAction<Song>>
}

export const CurrentSongContext = createContext<CurrentSongContextProps>({
  currentSong: {
    imageUrl: '',
    artistName: '',
    songName: '',
  },
  setCurrentSong: () => {},
})
