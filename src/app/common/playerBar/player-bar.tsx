'use client'

import { useState } from 'react'
import CurrentSong from './current-song'
import Player from './player'
import Volume from './volume'

export default function PlayerBar() {
  const [volume, setVolume] = useState(50)
  return (
    <section className="flex h-20 w-full justify-between ">
      <CurrentSong />
      <Player volume={volume} />
      <Volume volume={volume} setVolume={setVolume} />
    </section>
  )
}
