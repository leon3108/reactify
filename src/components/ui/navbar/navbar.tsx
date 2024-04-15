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
import { usePathname } from 'next/navigation'
import { useRef, useState } from 'react'
import { ImperativePanelHandle } from 'react-resizable-panels'
import { Badge } from '../badge'
import { Card, CardContent } from '../card'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '../context-menu'
import LibraryList from './library-list'

const MIN_PANEL_SIZE = 5
const SIZE_WITHOUT_ICON = 10
const TEXT_GRAY_500 = '#a7a6a7'

export default function Navbar() {
  const [arrow, setArrow] = useState<React.ReactNode>(<MoveRight />)
  const panelRef = useRef<ImperativePanelHandle>(null)
  const navbarSize = useRef(35)
  const pathname = usePathname()

  const handleResize = (size: number) => {
    size >= 35 ? setArrow(<MoveLeft />) : setArrow(<MoveRight />)
  }

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
    <ResizablePanel
      onResize={handleResize}
      ref={panelRef}
      defaultSize={navbarSize.current}
      minSize={MIN_PANEL_SIZE}
    >
      <nav className="h-full space-y-2">
        <Card>
          <CardContent className="mt-2 space-y-2">
            <div className="flex space-x-2">
              <Home
                className="hover:cursor-pointer"
                color={pathname == '/' ? 'white' : TEXT_GRAY_500}
              />
              {panelRef.current &&
              panelRef.current.getSize() > SIZE_WITHOUT_ICON ? (
                <Link
                  href="/"
                  className={`${pathname == '/' ? 'text-white ' : 'text-gray-500 '} font-bold`}
                >
                  Home
                </Link>
              ) : null}
            </div>
            <div className="flex space-x-2">
              <Search
                className="hover:cursor-pointer"
                color={pathname == '/search' ? 'white' : TEXT_GRAY_500}
              />
              {panelRef.current &&
              panelRef.current.getSize() > SIZE_WITHOUT_ICON ? (
                <Link
                  href="/search"
                  className={`${pathname == '/search' ? 'text-white ' : 'text-gray-500 '} font-bold`}
                >
                  Search
                </Link>
              ) : null}
            </div>
          </CardContent>
        </Card>
        <Card className="h-full">
          <CardContent>
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
                <Badge variant={'secondary'} className="h-7 text-nowrap	">
                  Podcasts & Shows
                </Badge>
              </div>
            ) : null}
            <div className="flex justify-between">
              <Search />
              <div className="flex space-x-2">
                <p className="font-bold text-">Recents</p>
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
