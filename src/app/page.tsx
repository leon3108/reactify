import { ScrollArea } from '@/ui/scroll-area'
import Filter from './components/filter'
import GoodMorning from './components/good-morning'
import Navbar from './components/navbar'
import Recommendations from './components/recommendations'

export default function Home() {
  return (
    <main className="mr-2 mt-2 flex h-full w-full flex-col space-y-4 rounded-lg bg-base p-5">
      <Navbar />
      <Filter />
      <ScrollArea className="@container">
        <GoodMorning />
        <Recommendations />
      </ScrollArea>
    </main>
  )
}
