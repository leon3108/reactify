'use client'

import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'
import likedSongs from '/public/liked-songs-300.png'

const list = [
  {
    src: likedSongs,
    title: 'leno + Leno',
  },
  {
    src: likedSongs,
    title: 'Liked Songs',
  },
  {
    src: 'https://i.scdn.co/image/ab67616d00001e02d726484fcdb087409ded0765',
    title: 'Toko dombi',
  },
  {
    src: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb34925ec32cd90699e1021914/1/en/default',
    title: 'Daily Mix 2',
  },
  {
    src: 'https://i.scdn.co/image/ab67616d00001e02729099a8ed5ab9795eee1c9d',
    title: 'JAAFAR',
  },
  {
    src: 'https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/aAbca4VNfzWuUCQ_FGiEFA==/bmVuZW5lbmVuZW5lbmVuZQ==',
    title: 'Discover Weekly',
  },
  {
    src: likedSongs,
    title: 'Daily Drive',
  },
  {
    src: 'https://i.scdn.co/image/ab67616d00001e02ff32827efb25248cd37819e1',
    title: 'Trix city 2',
  },
]

function GridElement({
  title,
  src,
}: {
  title: string
  src: string | StaticImageData
}) {
  return (
    <div className="flex h-12 w-full items-center space-x-2 rounded-sm bg-[#FFFFFF12] hover:bg-[#FFFFFF33] lg:h-16 xl:h-20">
      <Image
        src={src}
        alt="cover image"
        className="h-full rounded-l-sm"
        width={80}
        height={80}
      />
      <p className="flex w-5/6 flex-grow">{title}</p>
    </div>
  )
}

export default function GoodMorning() {
  return (
    <section className={cn('grid grid-cols-4 grid-rows-2 gap-4')}>
      {list.map((item) => (
        <GridElement title={item.title} src={item.src} key={item.title} />
      ))}
    </section>
  )
}
