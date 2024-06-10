'use client'

import { PANEL_SIZE } from '@/app/(authentificated)/const'
import { ResizablePanel } from '@/ui/resizable'
import { MoveLeft, MoveRight } from 'lucide-react'
import { useRef, useState } from 'react'
import { ImperativePanelHandle } from 'react-resizable-panels'
import Menu from './menu'
import YourLibrary from './your-library'

export default function Sidebar() {
  const [arrow, setArrow] = useState<React.ReactNode>(<MoveRight />)
  const panelRef = useRef<ImperativePanelHandle>(null)

  const handleResize = (size: number) => {
    if (size <= PANEL_SIZE.small) {
      panelRef.current?.resize(PANEL_SIZE.min)
    }
    if (size > PANEL_SIZE.small && size < PANEL_SIZE.medium) {
      panelRef.current?.resize(PANEL_SIZE.medium)
    }
    size >= PANEL_SIZE.large
      ? setArrow(
          <MoveLeft
            className="cursor-pointer stroke-grey-500"
            onClick={() => {
              panelRef.current?.resize(PANEL_SIZE.medium)
            }}
          />,
        )
      : setArrow(
          <MoveRight
            className="cursor-pointer stroke-grey-500"
            onClick={() => {
              panelRef.current?.resize(PANEL_SIZE.large)
            }}
          />,
        )
  }

  return (
    <ResizablePanel
      onResize={handleResize}
      ref={panelRef}
      defaultSize={PANEL_SIZE.default}
      minSize={PANEL_SIZE.min}
      maxSize={PANEL_SIZE.max}
      className="min-w-20"
    >
      <nav className="h-full space-y-2">
        <Menu panelRef={panelRef} />
        <YourLibrary panelRef={panelRef} arrow={arrow} />
      </nav>
    </ResizablePanel>
  )
}
