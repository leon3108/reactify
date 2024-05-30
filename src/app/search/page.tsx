import { ScrollArea } from '@/ui/scroll-area'
import Navbar from '../common/navbar'
import SearchFooter from './components/SearchFooter/search-footer'
import Browse from './components/browse'
import RecentsSearches from './components/recents-searches'

export default function Home() {
  return (
    <main className="h-full w-full p-1">
      <ScrollArea className="flex h-full w-full flex-col items-center ">
        <Navbar />
        <RecentsSearches />
        <Browse />
        <SearchFooter />
      </ScrollArea>
    </main>
  )
}
