import { CircleCheck } from 'lucide-react'
import Image from 'next/image'
import yourEpisodes from '/public/yourEpisodes.png'

export default function CurrentSong() {
  return (
    <section className="flex w-1/3 space-x-2">
      <Image src={yourEpisodes} alt="song's cover" className="rounded-md" />
      <div className="flex flex-col justify-center">
        <p>current song</p>
        <p>Album</p>
      </div>
      <div className="flex items-center justify-center">
        <CircleCheck className="fill-spotify stroke-black" />
      </div>
    </section>
  )
}
