import { Badge } from '@/ui/badge'

export default function FilterByType({}: {}) {
  return (
    <section className="flex space-x-2 overflow-hidden">
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
