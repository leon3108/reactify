import { List, Search } from 'lucide-react'

export default function SearchinMyLib() {
  return (
    <div className="flex justify-between">
    <Search />
    <div className="flex space-x-2">
      <p className="font-bold text-">Recents</p>
      <List />
    </div>
  </div>
)
}