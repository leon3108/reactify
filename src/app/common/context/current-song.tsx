import { Song } from '@/app/(authentificated)/type'
import { createContext } from 'react'

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
