import { CircleCheck, Volume2 } from 'lucide-react'
import Image from 'next/image'
import { Slider } from '@/ui/slider'
import Player from './player'
import yourEpisodes from '/public/yourEpisodes.png'

export default function Footer() {
  return (
    <footer className="flex h-20 w-full justify-between ">
      <div className="flex w-1/3 space-x-2">
        <Image src={yourEpisodes} alt="song's cover" className="rounded-md" />
        <div className="flex flex-col justify-center">
          <p>current song</p>
          <p>Album</p>
        </div>
        <div className="flex items-center justify-center">
          <CircleCheck className="fill-spotify stroke-black" />
        </div>
      </div>
      <Player />
      <div className="flex w-1/3 items-center justify-end">
        <div className="flex w-1/2 justify-end space-x-1 pl-10 pr-2">
          <Volume2 />
          <Slider defaultValue={[0]} value={[0]} />
        </div>
      </div>
    </footer>
  )
}
