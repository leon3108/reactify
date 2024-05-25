'use client'

import { ResizablePanel } from '@/ui/resizable'
import { MoveLeft, MoveRight } from 'lucide-react'
import { useRef, useState } from 'react'
import { ImperativePanelHandle } from 'react-resizable-panels'
import { MIN_PANEL_SIZE } from './const'
import Menu from './menu'
import YourLibrary from './your-library'

export default function Sidebar() {
  const [arrow, setArrow] = useState<React.ReactNode>(<MoveRight />)
  const panelRef = useRef<ImperativePanelHandle>(null)
  const navbarSize = useRef(20)

  const handleResize = (size: number) => {
    size >= 35 ? setArrow(<MoveLeft className='stroke-grey-500'/>) : setArrow(<MoveRight className='stroke-grey-500'/>)
  }

  return (
    <ResizablePanel
      onResize={handleResize}
      ref={panelRef}
      defaultSize={navbarSize.current}
      minSize={MIN_PANEL_SIZE}
    >
      <nav className="h-full space-y-2">
        <Menu panelRef={panelRef} />
        <YourLibrary
          panelRef={panelRef}
          navbarSize={navbarSize}
          arrow={arrow}
        />
      </nav>
    </ResizablePanel>
  )
}
