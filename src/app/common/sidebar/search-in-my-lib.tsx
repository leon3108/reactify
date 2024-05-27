import { Button } from '@/ui/button'
import { List, Search } from 'lucide-react'

export default function SearchinMyLib() {
  return (
    <div className="flex justify-between">
      <Button
        size={'icon'}
        variant={'secondary'}
        className="h-8 w-8 rounded-full border-none bg-card hover:bg-badge"
      >
        <Search className="stroke-grey-500 hover:stroke-white" size={20}/>
      </Button>
      <div className="group flex space-x-2">
        <p className=" text-sm font-semibold text-grey-500 group-hover:text-white">
          Recents
        </p>
        <List className="stroke-grey-500 group-hover:stroke-white" />
      </div>
    </div>
  )
}
