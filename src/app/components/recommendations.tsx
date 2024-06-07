'use client'

import { Button } from '@/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/ui/card'
import { Play } from 'lucide-react'
import Image from 'next/image'
import { useContext } from 'react'
import { CurrentSongContext } from '../common/context/current-song'
import { RecommendationsList } from '../data'
import { PlaylistItem } from '../type'

function Item({ src, title, description, artist }: PlaylistItem) {
  const currentSongContext = useContext(CurrentSongContext)
  const handleClick = () => {
    if (currentSongContext == null) return
    currentSongContext.setCurrentSong({
      imageUrl: src,
      artistName: artist,
      songName: title,
    })
  }

  return (
    <Card className="group h-80 w-56 border-none">
      <CardHeader>
        <CardTitle className="text-base font-semibold text-white">
          <div className="relative">
            <Image
              src={src}
              alt="image cover of the playlist"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <div className="absolute bottom-2 right-4 h-12 w-12 rounded-full bg-spotify p-2 opacity-0 group-hover:opacity-100">
              <Play
                className="h-8 w-8 fill-black-500 stroke-black-500 p-2"
                onClick={handleClick}
              />
            </div>
          </div>
          {title}
        </CardTitle>
        <CardDescription className=" text-subdued">
          {description}
          {artist}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

function PlaylistHeader({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-between">
      <h3 className="text-2xl font-bold">{name}</h3>
      <Button variant="link" className="font-semibold">
        Show all
      </Button>
    </div>
  )
}

export default function Recommendations() {
  return (
    <section className="">
      {RecommendationsList.map((playlist, index) => (
        <div key={index}>
          <PlaylistHeader name={playlist.name} />
          <div className="flex w-full space-x-1">
            {playlist.items.map((item, index) => (
              <Item key={index} {...item} />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
