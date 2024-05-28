'use client'

import { ResizablePanel } from '@/ui/resizable'
import { MoveLeft, MoveRight } from 'lucide-react'
import { useRef, useState } from 'react'
import { ImperativePanelHandle } from 'react-resizable-panels'
import { PANEL_SIZE } from './const'
import Menu from './menu'
import YourLibrary from './your-library'

export default function Sidebar() {
  const [arrow, setArrow] = useState<React.ReactNode>(<MoveRight />)
  const panelRef = useRef<ImperativePanelHandle>(null)

  const handleResize = (size: number) => {
    // si la taille <= 7,5 on met 5
    if (size <= PANEL_SIZE.small) {
      panelRef.current?.resize(PANEL_SIZE.min)
    }
    // si la taille est > à 7,5 et < 10 on met à 10
    if (size > PANEL_SIZE.small && size < PANEL_SIZE.medium) {
      panelRef.current?.resize(PANEL_SIZE.medium)
    }
    size >= PANEL_SIZE.large
      ? setArrow(
          <MoveLeft
            className="stroke-grey-500"
            onClick={() => {
              panelRef.current?.resize(PANEL_SIZE.medium)
            }}
          />,
        )
      : setArrow(
          <MoveRight
            className="stroke-grey-500"
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
