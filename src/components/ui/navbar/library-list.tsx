import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
import { Pin } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import { ScrollArea } from '../scroll-area'
import likedSongs from '/public/liked-songs-300.png'
import yourEpisodes from '/public/yourEpisodes.png'

// #232222
const SPOTIFY_COLOR = '#1ed760'

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
    src: yourEpisodes,
    title: 'Leno + Leon',
    type: 'Playlist • Spotify',
    isPinned: false,
  },
  {
    src: yourEpisodes,
    title: 'OG SAN 1',
    type: 'Album • Deen Burbigo',
    isPinned: false,
  },
  {
    src: yourEpisodes,
    title: 'Deadly Poison Sting',
    type: 'Album • baby hayabusa',
    isPinned: false,
  },
  {
    src: yourEpisodes,
    title: 'Bémol',
    type: 'Album • Kaozed',
    isPinned: false,
  },
  {
    src: yourEpisodes,
    title: 'Trix City 2',
    type: 'Album • Diddi Trix',
    isPinned: false,
  },
  {
    src: yourEpisodes,
    title: 'JAAFAR',
    type: 'Album • Rounhaa',
    isPinned: false,
  },
  {
    src: yourEpisodes,
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
      <ContextMenuTrigger className="flex space-x-2 hover:bg-[#1a1a1a] p-2 rounded-lg">
        <Image src={src} alt="likedSongs" width={50} className="rounded-md" />
        <div className="flex flex-col">
          <p>{title}</p>
          <div className="flex">
            {isPinned && <Pin color={SPOTIFY_COLOR} fill={SPOTIFY_COLOR} />}
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
