'use client'

import { CircleCheck } from 'lucide-react'
import Image from 'next/image'
import { useContext } from 'react'
import { CurrentSongContext } from '../context/current-song'
import SongSkeleton from './song-skeleton'

export default function CurrentSong() {
  const currentSongContext = useContext(CurrentSongContext)
  if (!currentSongContext) return null

  return (
    <section className="flex w-1/3 space-x-2">
      {currentSongContext.currentSong.imageUrl == '' ? (
        <SongSkeleton />
      ) : (
        <Image
          src={currentSongContext.currentSong.imageUrl}
          alt="song's cover"
          className="h-14 w-14 rounded-md"
          width={56}
          height={56}
        />
      )}
      <div className="flex flex-col justify-center">
        <p>{currentSongContext.currentSong.songName}</p>
        <p>{currentSongContext.currentSong.artistName}</p>
      </div>
      <div className="flex items-center justify-center">
        <CircleCheck className="fill-spotify stroke-black" />
      </div>
    </section>
  )
}
