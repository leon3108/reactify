'use client'

import { ReactNode, useState } from 'react'
import { CurrentSongContext, Song } from './common/context/current-song'

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
