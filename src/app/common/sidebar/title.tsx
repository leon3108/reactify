import { ICON_SIZE, PANEL_SIZE } from '@/app/const'
import { cn } from '@/lib/utils'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/ui/context-menu'
import { Library, Music, Plus } from 'lucide-react'
import { ImperativePanelHandle } from 'react-resizable-panels'

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
          className="group my-4 flex hover:cursor-pointer"
          onClick={handleClickContextMenu}
        >
          <Library
            className="stroke-grey-500 group-hover:stroke-white"
            size={ICON_SIZE}
          />
          {showText && (
            <p className="font-bold text-grey-500 group-hover:text-white">
              Your library
            </p>
          )}
        </ContextMenuTrigger>
        <ContextMenuContent className="w-48 bg-grey-100">
          <ContextMenuItem inset className="space-x-3 hover:bg-grey-200">
            <Music />
            <p>Create playlist</p>
          </ContextMenuItem>
          <ContextMenuItem inset className="space-x-3 hover:bg-grey-200">
            <Plus />
            <p>Create folder</p>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      {showText ? (
        <div className="flex items-center space-x-3">
          <div className="hover:bg-black-900 flex h-8 w-8 items-center justify-center rounded-full">
            <Plus className="cursor-pointer stroke-grey-500" />
          </div>
          <div className="hover:bg-black-900 flex h-8 w-8 items-center justify-center rounded-full">
            {arrow}
          </div>
        </div>
      ) : null}
    </div>
  )
}
