import { ImperativePanelHandle } from 'react-resizable-panels'
import { Badge } from '../badge'
import { SIZE_WITHOUT_ICON } from './const'

export default function FilterByType({
  panelRef,
}: {
  panelRef: React.RefObject<ImperativePanelHandle>
}) {
  return (
    <section>
      {panelRef.current && panelRef.current.getSize() > SIZE_WITHOUT_ICON ? (
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
    </section>
  )
}
