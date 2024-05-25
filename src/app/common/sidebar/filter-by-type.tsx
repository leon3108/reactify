import { ImperativePanelHandle } from 'react-resizable-panels'
import { SIZE_WITHOUT_ICON } from './const'
import { Badge } from '@/ui/badge'

export default function FilterByType({
  panelRef,
}: {
  panelRef: React.RefObject<ImperativePanelHandle>
}) {
  return (
    <section>
      {panelRef.current && panelRef.current.getSize() > SIZE_WITHOUT_ICON ? (
        <div className="overflow-hidden flex space-x-2">
          <Badge variant={'secondary'} className="h-7 bg-badge">
            Playlist
          </Badge>
          <Badge variant={'secondary'} className="h-7 bg-badge">
            Artists
          </Badge>
          <Badge variant={'secondary'} className="h-7 bg-badge">
            Albums
          </Badge>
          <Badge variant={'secondary'} className="h-7 text-nowrap	bg-badge">
            Podcasts & Shows
          </Badge>
        </div>
      ) : null}
    </section>
  )
}
