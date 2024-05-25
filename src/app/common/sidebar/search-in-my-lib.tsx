import { List, Search } from 'lucide-react'

export default function SearchinMyLib() {
  return (
    <div className="flex justify-between">
      <Search className="stroke-grey-500"/>
      <div className="flex space-x-2">
        <p className=" text-grey-500 text-sm font-semibold">Recents</p>
        <List className="stroke-grey-500" />
      </div>
    </div>
  )
}
