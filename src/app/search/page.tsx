import { ScrollArea } from '@/ui/scroll-area'
import Footer from '../common/footer/footer'
import Navbar from '../common/navbar'
import Browse from './components/browse'
import RecentsSearches from './components/recents-searches'

export default function Home() {
  return (
    <main className="w-fbg-pink-500 mt-2 h-full bg-card p-4">
      <Navbar path="search" />
      <ScrollArea className="flex h-full w-full flex-col items-center ">
        <RecentsSearches />
        <Browse />
        <Footer />
      </ScrollArea>
    </main>
  )
}
