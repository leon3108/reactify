import { Badge } from '@/ui/badge'

export default function Filter() {
  return (
    <section className="flex space-x-2">
      <Badge variant={'secondary'} className="h-7 bg-badge">
        All
      </Badge>
      <Badge variant={'secondary'} className="h-7 bg-badge">
        Music
      </Badge>
      <Badge variant={'secondary'} className="h-7 bg-badge">
        Podcasts
      </Badge>
    </section>
  )
}
