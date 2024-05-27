import { cn } from '@/lib/utils'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/ui/context-menu'
import { Library, Music, Plus } from 'lucide-react'
import { ImperativePanelHandle } from 'react-resizable-panels'
import { ICON_SIZE, PANEL_SIZE } from './const'

export default function Title({
  panelRef,
  arrow,
}: {
  panelRef: React.RefObject<ImperativePanelHandle>
  arrow: React.ReactNode
}) {
  const handleClickContextMenu = () => {
    if (!panelRef.current) return
    if (panelRef.current.getSize() === PANEL_SIZE.min) {
      panelRef.current.resize(20)
    } else {
      panelRef.current.resize(PANEL_SIZE.min)
    }
  }

  const showText = panelRef.current?.getSize()! > PANEL_SIZE.min

  return (
    <div
      className={cn(
        'flex justify-between',
        panelRef.current?.getSize()! <= PANEL_SIZE.min
          ? 'w-full items-center justify-center'
          : '',
      )}
    >
      <ContextMenu>
        <ContextMenuTrigger
          className="my-4 flex hover:cursor-pointer"
          onClick={handleClickContextMenu}
        >
          <Library className="stroke-grey-500" size={ICON_SIZE} />
          {showText && <p className="font-bold text-grey-500">Your library</p>}
        </ContextMenuTrigger>
        <ContextMenuContent className="w-48">
          <ContextMenuItem inset className="space-x-3">
            <Music />
            <p>Create playlist</p>
          </ContextMenuItem>
          <ContextMenuItem inset className="space-x-3">
            <Plus />
            <p>Create folder</p>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      {showText ? (
        <div className="flex items-center space-x-4">
          <Plus className="stroke-grey-500" />
          {arrow}
        </div>
      ) : null}
    </div>
  )
}
