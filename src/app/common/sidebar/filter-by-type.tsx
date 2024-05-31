import { Badge } from '@/ui/badge'

export default function FilterByType({}: {}) {
  return (
    <section
      className="flex h-20 space-x-2 overflow-x-auto"
      style={{ scrollbarWidth: 'none' }}
    >
      <Badge variant={'secondary'} className="h-7">
        Playlist
      </Badge>
      <Badge variant={'secondary'} className="h-7">
        Artists
      </Badge>
      <Badge variant={'secondary'} className="h-7 ">
        Albums
      </Badge>
      <Badge variant={'secondary'} className="h-7 text-nowrap">
        Podcasts & Shows
      </Badge>
    </section>
  )
}
