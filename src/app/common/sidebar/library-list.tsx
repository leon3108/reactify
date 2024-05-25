import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/ui/context-menu'
import { Pin } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import likedSongs from '/public/liked-songs-300.png'
import yourEpisodes from '/public/yourEpisodes.png'
import { ScrollArea } from '@/ui/scroll-area'

const list = [
  {
    src: likedSongs,
    title: 'Liked Songs',
    type: 'Playlist',
    isPinned: true,
  },
  {
    src: yourEpisodes,
    title: 'Your Episodes',
    type: 'Saved & downloaded episodes',
    isPinned: true,
  },
  {
    src: "https://i.scdn.co/image/ab67616d000011eba7f9118d82700a41c3b3d82d",
    title: 'Bitume Caviar (Vol.1)',
    type: 'ALbum • ISHA',
    isPinned: false,
  },
  {
    src: "https://i.scdn.co/image/ab67616d000011eb2b3a9c113ffedc4087244f58",
    title: 'OG SAN 1',
    type: 'Album • Deen Burbigo',
    isPinned: false,
  },
  {
    src: "https://i.scdn.co/image/ab67616d000011ebaeb44e431e6792e8c79f71f5",
    title: 'Deadly Poison Sting',
    type: 'Album • baby hayabusa',
    isPinned: false,
  },
  {
    src: "https://i.scdn.co/image/ab67616d000011eb45e8071ae72b45fd5df11029",
    title: 'Bémol',
    type: 'Album • Kaozed',
    isPinned: false,
  },
  {
    src: "https://i.scdn.co/image/ab67616d000011ebff32827efb25248cd37819e1",
    title: 'Trix City 2',
    type: 'Album • Diddi Trix',
    isPinned: false,
  },
  {
    src: "https://i.scdn.co/image/ab67616d000011eb729099a8ed5ab9795eee1c9d",
    title: 'JAAFAR',
    type: 'Album • Rounhaa',
    isPinned: false,
  },
  {
    src: "https://i.scdn.co/image/ab6761610000101f559d3b7288ac297cce4bfe86",
    title: 'Henri Bleu',
    type: 'Artiste',
    isPinned: false,
  },
]

function LibraryElement({
  src,
  title,
  type,
  isPinned,
}: {
  src: string | StaticImageData
  title: String
  type: String
  isPinned: Boolean
}) {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex space-x-2 rounded-lg p-2 hover:bg-[#1a1a1a]">
        <Image src={src} alt="likedSongs" width={50} height={50} className="rounded-md" />
        <div className="flex flex-col">
          <p>{title}</p>
          <div className="flex">
            {isPinned && <Pin className=" fill-spotify stroke-spotify" />}
            <p>{type}</p>
          </div>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Billing</ContextMenuItem>
        <ContextMenuItem>Team</ContextMenuItem>
        <ContextMenuItem>Subscription</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export default function LibraryList() {
  return (
    <section className="flex flex-col space-y-2">
      <ScrollArea>
        {list.map((item, index) => (
          <LibraryElement
            key={index}
            src={item.src}
            title={item.title}
            type={item.type}
            isPinned={item.isPinned}
          />
        ))}
      </ScrollArea>
    </section>
  )
}
