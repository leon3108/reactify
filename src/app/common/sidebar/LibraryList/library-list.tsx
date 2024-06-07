import { sidebarList } from '@/app/data'
import { ScrollArea } from '@/ui/scroll-area'
import { ImperativePanelHandle } from 'react-resizable-panels'
import LibraryItem from './library-item'

export default function LibraryList({
  panelRef,
}: {
  panelRef: React.RefObject<ImperativePanelHandle>
}) {
  return (
    <section className="flex flex-col space-y-2 overflow-hidden">
      <ScrollArea>
        {sidebarList.map((item, index) => (
          <LibraryItem key={index} {...item} panelRef={panelRef} />
        ))}
      </ScrollArea>
    </section>
  )
}
