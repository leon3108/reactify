import { Card, CardContent } from '@/ui/card'
import { ImperativePanelHandle } from 'react-resizable-panels'
import FilterByType from './filter-by-type'
import LibraryList from './library-list'
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
    <Card className="h-full bg-base">
      <CardContent className="px-0">
        <Title panelRef={panelRef} arrow={arrow} />
        <FilterByType panelRef={panelRef} />
        <SearchinMyLib />
        <LibraryList panelRef={panelRef} />
      </CardContent>
    </Card>
  )
}
