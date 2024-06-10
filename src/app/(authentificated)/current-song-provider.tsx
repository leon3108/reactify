'use client'

import { ReactNode, useState } from 'react'
import { CurrentSongContext } from '../common/context/current-song'
import { Song } from './type'

export function CurrentSongProvider({ children }: { children: ReactNode }) {
  const [currentSong, setCurrentSong] = useState<Song>({
    imageUrl: '',
    artistName: '',
    songName: '',
  })
  return (
    <CurrentSongContext.Provider value={{ currentSong, setCurrentSong }}>
      {children}
    </CurrentSongContext.Provider>
  )
}
