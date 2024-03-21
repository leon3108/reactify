'use client'

import { ResizablePanel } from '@/components/ui/resizable'
import {
  Home,
  Library,
  List,
  MoveLeft,
  MoveRight,
  Music,
  Plus,
  Search,
} from 'lucide-react'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { ImperativePanelHandle } from 'react-resizable-panels'
import { Badge } from './badge'
import { Card, CardContent } from './card'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from './context-menu'
import LibraryList from './library-list'

const MIN_PANEL_SIZE = 5
const SIZE_WITHOUT_ICON = 10

export default function NavBar() {
  const [arrow, setArrow] = useState<React.ReactNode>(<MoveRight />)
  const panelRef = useRef<ImperativePanelHandle>(null)
  const navbarSize = useRef(35)

  const handleResize = (size: number) => {
    size >= 35 ? setArrow(<MoveLeft />) : setArrow(<MoveRight />)
  }

  const handleClickContextMenu = () => {
    if (!panelRef.current) {
      return
    }
    if (panelRef.current.getSize() === MIN_PANEL_SIZE) {
      panelRef.current.resize(navbarSize.current)
    } else {
      navbarSize.current = panelRef.current.getSize()
      panelRef.current.resize(MIN_PANEL_SIZE)
    }
  }

  return (
    <ResizablePanel
      onResize={handleResize}
      ref={panelRef}
      defaultSize={navbarSize.current}
    >
      <nav>
        <Card>
          <CardContent className="mt-2 space-y-2">
            <div className="flex space-x-2">
              <Home className="hover:cursor-pointer" />
              {panelRef.current &&
              panelRef.current.getSize() > SIZE_WITHOUT_ICON ? (
                <Link href="/">Home</Link>
              ) : null}
            </div>
            <div className="flex space-x-2">
              <Search className="hover:cursor-pointer" />
              {panelRef.current &&
              panelRef.current.getSize() > SIZE_WITHOUT_ICON ? (
                <Link href="/search">Search</Link>
              ) : null}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="flex justify-between my-2">
              <ContextMenu>
                <ContextMenuTrigger
                  className="flex  hover:cursor-pointer"
                  onClick={handleClickContextMenu}
                >
                  <Library />
                  {panelRef.current &&
                  panelRef.current.getSize() > SIZE_WITHOUT_ICON ? (
                    <p>Your library</p>
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
              {panelRef.current &&
              panelRef.current.getSize() > SIZE_WITHOUT_ICON ? (
                <div className="flex space-x-4">
                  <Plus />
                  {arrow}
                </div>
              ) : null}
            </div>
            {panelRef.current &&
            panelRef.current.getSize() > SIZE_WITHOUT_ICON ? (
              <div className="overflow-hidden flex space-x-2">
                <Badge variant={'secondary'} className="h-7">
                  Playlist
                </Badge>
                <Badge variant={'secondary'} className="h-7">
                  Artists
                </Badge>
                <Badge variant={'secondary'} className="h-7">
                  Albums
                </Badge>
                <Badge variant={'secondary'} className="h-7">
                  Podcasts & Shows
                </Badge>
              </div>
            ) : null}
            <div className="flex justify-between">
              <Search />
              <div className="flex">
                <p>Recents</p>
                <List />
              </div>
            </div>
            <LibraryList />
          </CardContent>
        </Card>
      </nav>
    </ResizablePanel>
  )
}
