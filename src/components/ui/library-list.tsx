import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
import { Pin } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import { ScrollArea } from './scroll-area'
import likedSongs from '/public/liked-songs-300.png'
import yourEpisodes from '/public/yourEpisodes.png'

// #232222

function LibraryElement({
  src,
  title,
  type,
}: {
  src: string | StaticImageData
  title: String
  type: String
}) {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex space-x-2 hover:bg-[#1a1a1a] p-2 rounded-lg">
        <Image src={src} alt="likedSongs" width={50} className="rounded-md" />
        <div className="flex flex-col">
          <p>{title}</p>
          <div className="flex">
            <Pin color="#1ed760" fill="#1ed760" />
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
        <LibraryElement
          src={likedSongs}
          title={'Liked Songs'}
          type={'Playlist'}
        />
        <LibraryElement
          src={yourEpisodes}
          title={'Your Episodes'}
          type={'Saved & downloaded episodes'}
        />
      </ScrollArea>
    </section>
  )
}
