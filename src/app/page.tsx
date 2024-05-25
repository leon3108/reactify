import { ScrollArea } from '@/ui/scroll-area'
import Filter from './components/filter'
import GoodMorning from './components/good-morning'
import Navbar from './components/navbar'
import Recommendations from './components/recommendations'

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col space-y-4 p-5">
      <Navbar />
      <Filter />
      <ScrollArea >
        <GoodMorning />
        <Recommendations />
      </ScrollArea>
    </main>
  )
}
