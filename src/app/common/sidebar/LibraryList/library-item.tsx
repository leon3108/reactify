import { PANEL_SIZE } from '@/app/(authentificated)/const'
import { cn } from '@/lib/utils'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/ui/context-menu'
import { Pin } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import { ImperativePanelHandle } from 'react-resizable-panels'

export default function LibraryItem({
  imageUrl,
  title,
  description,
  isPinned,
  panelRef,
}: {
  imageUrl: string | StaticImageData
  title: string
  description?: string
  isPinned?: boolean
  panelRef: React.RefObject<ImperativePanelHandle>
}) {
  const panelSizeBiggerThanSmall =
    panelRef.current?.getSize()! > PANEL_SIZE.small
  return (
    <ContextMenu>
      <ContextMenuTrigger
        className={cn(
          'flex cursor-pointer space-x-2 rounded-lg p-2 hover:bg-[#1a1a1a]',
          panelSizeBiggerThanSmall ? '' : 'justify-center',
        )}
      >
        <Image
          src={imageUrl}
          alt={title}
          width={48}
          height={48}
          className={cn(
            'rounded-md ',
            panelSizeBiggerThanSmall ? '' : 'h-12 w-12',
          )}
        />
        <div
          className={cn(
            'flex flex-col',
            panelSizeBiggerThanSmall ? '' : 'hidden',
          )}
        >
          <p>{title}</p>
          <div className="flex">
            {isPinned && <Pin className=" fill-spotify stroke-spotify" />}
            <p className="truncate text-sm text-subdued">{description}</p>
          </div>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Remove from Your Library</ContextMenuItem>
        <ContextMenuItem>Add to queue</ContextMenuItem>
        <ContextMenuItem>Go to artist radio</ContextMenuItem>
        <ContextMenuSeparator></ContextMenuSeparator>
        <ContextMenuItem>Pin Album</ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>Add to playlist</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>Find a playlist</ContextMenuItem>
            <ContextMenuItem>New playlist</ContextMenuItem>
            <ContextMenuSeparator></ContextMenuSeparator>
            <ContextMenuItem>playlist 1</ContextMenuItem>
            <ContextMenuItem>playlist 2</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator></ContextMenuSeparator>
        <ContextMenuSub>
          <ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>Copy Spotify URI</ContextMenuItem>
            <ContextMenuItem>Embed album</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator></ContextMenuSeparator>
        <ContextMenuItem>Open in Desktop app</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
