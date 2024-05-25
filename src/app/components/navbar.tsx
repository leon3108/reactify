import { Avatar, AvatarFallback, AvatarImage } from '@/ui/avatar'
import { Button } from '@/ui/button'
import {
  ArrowDownFromLine,
  Bell,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

export default function Navbar() {
  return (
    <section className="flex w-full justify-between bg-blue-700">
      <div className="flex items-center">
        <ChevronLeft className="rounded-full bg-[#0000008a] h-7 w-7 stroke-[#b3b3b3]" />
        <ChevronRight className="rounded-full bg-[#0000008a] h-7 w-7 stroke-[#b3b3b3]" />
      </div>
      <div className="flex items-center space-x-1">
        <Button className="rounded-3xl font-bold">Explore Premium</Button>
        <Button className="rounded-3xl " variant={'secondary'}>
          <ArrowDownFromLine />
          Install App
        </Button>
        <Button className="rounded-3xl" variant={'secondary'}>
          <Bell />
        </Button>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>L</AvatarFallback>
        </Avatar>
      </div>
    </section>
  )
}
