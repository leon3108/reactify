import Navbar from '../common/navbar'
import Browse from './components/browse'
import RecentsSearches from './components/recents-searches'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-1">
      <Navbar />
      <RecentsSearches />
      <Browse />
      {/* grid */}
      {/* footer */}
    </main>
  )
}
