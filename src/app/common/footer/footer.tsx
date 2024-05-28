'use client'

import CurrentSong from './current-song'
import Player from './player'
import Volume from './volume'
import { useState } from 'react'

export default function Footer() {
  const [volume, setVolume] = useState(50)
  return (
    <footer className="flex h-20 w-full justify-between ">
      <CurrentSong />
      <Player volume={volume}/>
      <Volume volume={volume} setVolume={setVolume}/>
    </footer>
  )
}
