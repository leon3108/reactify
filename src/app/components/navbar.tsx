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
    <section className="flex w-full justify-between">
      <div className="flex items-center space-x-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0000008a]">
          <ChevronLeft className="stroke-[#b3b3b3]" />
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0000008a]">
          <ChevronRight className="stroke-[#b3b3b3]" />
        </div>
      </div>
      <div className="flex items-center space-x-1">
        <Button className="rounded-3xl font-bold">Explore Premium</Button>
        <Button className="rounded-3xl" variant={'secondary'} size={'sm'}>
          <ArrowDownFromLine />
          Install App
        </Button>
        <Button className="rounded-3xl" variant={'secondary'} size={'icon'}>
          <Bell />
        </Button>
        <Button size={'icon'} variant={'secondary'} className="rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>L</AvatarFallback>
          </Avatar>
        </Button>
      </div>
    </section>
  )
}
