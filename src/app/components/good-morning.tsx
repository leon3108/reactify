import { cn } from '@/lib/utils'
import { RecentsListeninglist } from '../const'
import RecentsListening from './recentsListening'

export default function GoodMorning() {
  return (
    <section
      className={cn(
        'grid gap-4 @xs:grid-cols-2 @xs:grid-rows-4 @6xl:grid-cols-4 @6xl:grid-rows-2',
      )}
    >
      {RecentsListeninglist.map((item) => (
        <RecentsListening title={item.title} src={item.src} key={item.title} />
      ))}
    </section>
  )
}
