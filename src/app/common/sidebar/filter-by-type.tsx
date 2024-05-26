import { Badge } from '@/ui/badge'
import { ImperativePanelHandle } from 'react-resizable-panels'

export default function FilterByType({
}: {
}) {
  return (
    <section className="flex space-x-2 overflow-hidden">
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
    </section>
  )
}
