import { Library, Music, Plus } from 'lucide-react'
import { MutableRefObject } from 'react'
import { ImperativePanelHandle } from 'react-resizable-panels'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '../context-menu'
import { MIN_PANEL_SIZE, SIZE_WITHOUT_ICON } from './const'

export default function Title({
  panelRef,
  navbarSize,
  arrow,
}: {
  panelRef: React.RefObject<ImperativePanelHandle>
  navbarSize: MutableRefObject<number>
  arrow: React.ReactNode
}) {
  const handleClickContextMenu = () => {
    if (!panelRef.current) return
    if (panelRef.current.getSize() === MIN_PANEL_SIZE) {
      panelRef.current.resize(navbarSize.current)
    } else {
      navbarSize.current = panelRef.current.getSize()
      panelRef.current.resize(MIN_PANEL_SIZE)
    }
  }

  return (
    <div className="flex justify-between my-2">
      <ContextMenu>
        <ContextMenuTrigger
          className="flex hover:cursor-pointer"
          onClick={handleClickContextMenu}
        >
          <Library />
          {panelRef.current &&
          panelRef.current.getSize() > SIZE_WITHOUT_ICON ? (
            <p className="font-bold">Your library</p>
          ) : null}
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
      {panelRef.current && panelRef.current.getSize() > SIZE_WITHOUT_ICON ? (
        <div className="flex space-x-4">
          <Plus />
          {arrow}
        </div>
      ) : null}
    </div>
  )
}
