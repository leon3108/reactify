'use client'

import { ResizablePanel } from '@/ui/resizable'
import { MoveLeft, MoveRight } from 'lucide-react'
import { useRef, useState } from 'react'
import { ImperativePanelHandle } from 'react-resizable-panels'
import { MAX_PANEL_SIZE, MIN_PANEL_SIZE } from './const'
import Menu from './menu'
import YourLibrary from './your-library'

const DEFAUT_SIZE = 20

export default function Sidebar() {
  const [arrow, setArrow] = useState<React.ReactNode>(<MoveRight />)
  const panelRef = useRef<ImperativePanelHandle>(null)

  const handleResize = (size: number) => {
    if (size <= 5) {
      size = 5
      panelRef.current?.resize(5)
    }
    if (size > 5 && size < 15) {
      size = 15
      panelRef.current?.resize(15)
    }
    size >= 35
      ? setArrow(<MoveLeft className="stroke-grey-500" />)
      : setArrow(<MoveRight className="stroke-grey-500" />)
    panelRef.current?.resize(size)
  }

  return (
    <ResizablePanel
      onResize={handleResize}
      ref={panelRef}
      defaultSize={DEFAUT_SIZE}
      minSize={MIN_PANEL_SIZE}
      maxSize={MAX_PANEL_SIZE}
    >
      <nav className="h-full space-y-2">
        <Menu panelRef={panelRef} />
        <YourLibrary panelRef={panelRef} arrow={arrow} />
      </nav>
    </ResizablePanel>
  )
}
