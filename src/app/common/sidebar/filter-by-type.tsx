import { MusicType } from '@/app/const'
import { Badge } from '@/ui/badge'

export default function FilterByType({}: {}) {
  return (
    <section
      className="flex h-20 space-x-2 overflow-x-auto"
      style={{ scrollbarWidth: 'none' }}
    >
      {MusicType.map((badge) => (
        <Badge variant={'secondary'} className="h-7 text-nowrap" key={badge}>
          {badge}
        </Badge>
      ))}
    </section>
  )
}
