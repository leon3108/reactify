import { PANEL_SIZE } from '@/app/(authentificated)/const'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/ui/card'
import { ImperativePanelHandle } from 'react-resizable-panels'
import LibraryList from './LibraryList/library-list'
import FilterByType from './filter-by-type'
import SearchinMyLib from './search-in-my-lib'
import Title from './title'

export default function YourLibrary({
  panelRef,
  arrow,
}: {
  //je ne me sers pas de ces props ici, est ce que je dois en faire un contexte ?
  panelRef: React.RefObject<ImperativePanelHandle>
  arrow: React.ReactNode
}) {
  return (
    <Card className="flex h-full bg-base">
      <CardContent
        className={cn(
          'flex h-full w-full flex-col space-y-2',
          panelRef.current?.getSize()! <= PANEL_SIZE.min ? 'p-0' : '',
        )}
      >
        <Title panelRef={panelRef} arrow={arrow} />
        {panelRef.current?.getSize()! > PANEL_SIZE.min && <FilterByType />}
        {panelRef.current?.getSize()! > PANEL_SIZE.min && <SearchinMyLib />}
        <LibraryList panelRef={panelRef} />
      </CardContent>
    </Card>
  )
}
