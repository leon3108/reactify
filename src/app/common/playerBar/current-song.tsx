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
      <div className="ml-4 flex items-center justify-center">
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
      </div>
      <div className="flex flex-col justify-center">
        <p className="w-fit cursor-pointer hover:underline">
          {currentSongContext.currentSong.songName}
        </p>
        <p className="w-fit cursor-pointer text-xs text-grey-500 hover:underline">
          {currentSongContext.currentSong.artistName}
        </p>
      </div>
      <div className="flex items-center justify-center">
        <CircleCheck className="cursor-pointer fill-spotify stroke-background" />
      </div>
    </section>
  )
}
