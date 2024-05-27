'use client'

import { Badge } from '@/ui/badge'
import { useState } from 'react'

export default function Filter() {
  const [filter, setFilter] = useState('All')

  return (
    <section className="flex space-x-2">
      <Badge
        variant={filter == 'All' ? 'default' : 'secondary'}
        className="h-7"
        onClick={() => setFilter('All')}
      >
        All
      </Badge>
      <Badge
        variant={filter == 'Music' ? 'default' : 'secondary'}
        className="h-7"
        onClick={() => setFilter('Music')}
      >
        Music
      </Badge>
      <Badge
        variant={filter == 'Podcasts' ? 'default' : 'secondary'}
        className="h-7"
        onClick={() => setFilter('Podcasts')}
      >
        Podcasts
      </Badge>
    </section>
  )
}
