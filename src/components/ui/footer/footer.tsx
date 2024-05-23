import Image from 'next/image'
import { Slider } from '../slider'
import yourEpisodes from '/public/yourEpisodes.png'

export default function Footer() {
  return (
    <footer className="w-full h-20 flex justify-between">
      <div className="flex">
        <Image src={yourEpisodes} alt="song's cover" />
        <div className="flex flex-col">
          <p>current song</p>
          <p>Album</p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="space-x-4 flex">
          <p>previous</p>
          <p>pause</p>
          <p>next</p>
        </div>
        <Slider />
      </div>
      <div>params</div>
    </footer>
  )
}
