import { MutableRefObject } from 'react'
import { ImperativePanelHandle } from 'react-resizable-panels'
import { Card, CardContent } from '@/ui/card'
import FilterByType from './filter-by-type'
import LibraryList from './library-list'
import SearchinMyLib from './search-in-my-lib'
import Title from './title'

export default function YourLibrary({
  panelRef,
  navbarSize,
  arrow,
}: {
  //je ne me sers pas de ces props ici, est ce que je dois en faire un contexte ?
  panelRef: React.RefObject<ImperativePanelHandle>
  navbarSize: MutableRefObject<number>
  arrow: React.ReactNode
}) {
  return (
    <Card className="h-full bg-base">
      <CardContent>
        <Title panelRef={panelRef} navbarSize={navbarSize} arrow={arrow} />
        <FilterByType panelRef={panelRef} />
        <SearchinMyLib />
        <LibraryList />
      </CardContent>
    </Card>
  )
}
