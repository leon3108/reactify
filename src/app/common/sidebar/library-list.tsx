import { cn } from '@/lib/utils'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/ui/context-menu'
import { ScrollArea } from '@/ui/scroll-area'
import { Pin } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import { ImperativePanelHandle } from 'react-resizable-panels'
import { PANEL_SIZE, sidebarList } from './const'

function LibraryElement({
  src,
  title,
  type,
  isPinned,
  panelRef,
}: {
  src: string | StaticImageData
  title: string
  type: string
  isPinned: boolean
  panelRef: React.RefObject<ImperativePanelHandle>
}) {
  return (
    <ContextMenu>
      <ContextMenuTrigger
        className={cn(
          'flex space-x-2 rounded-lg p-2 hover:bg-[#1a1a1a]',
          panelRef.current?.getSize()! > PANEL_SIZE.small
            ? ''
            : 'justify-center',
        )}
      >
        <Image
          src={src}
          alt={title}
          width={48}
          height={48}
          className={cn(
            'rounded-md ',
            panelRef.current?.getSize()! > PANEL_SIZE.small ? '' : 'h-12 w-12',
          )}
        />
        <div
          className={cn(
            'flex flex-col',
            panelRef.current?.getSize()! > PANEL_SIZE.small ? '' : 'hidden',
          )}
        >
          <p>{title}</p>
          <div className="flex">
            {isPinned && <Pin className=" fill-spotify stroke-spotify" />}
            <p className="truncate text-sm text-subdued">{type}</p>
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

export default function LibraryList({
  panelRef,
}: {
  panelRef: React.RefObject<ImperativePanelHandle>
}) {
  return (
    <section className="flex flex-col space-y-2 overflow-hidden">
      <ScrollArea>
        {sidebarList.map((item, index) => (
          <LibraryElement
            key={index}
            src={item.src}
            title={item.title}
            type={item.type}
            isPinned={item.isPinned}
            panelRef={panelRef}
          />
        ))}
      </ScrollArea>
    </section>
  )
}
