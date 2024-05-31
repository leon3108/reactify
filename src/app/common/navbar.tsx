'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/ui/avatar'
import { Button } from '@/ui/button'
import { Input } from '@/ui/input'
import {
  ArrowDownFromLine,
  Bell,
  ChevronLeft,
  ChevronRight,
  Search,
} from 'lucide-react'
import { useEffect, useRef } from 'react'

export default function Navbar({ path }: { path: string }) {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])
  return (
    <nav className="flex h-12 w-full items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0000008a]">
          <ChevronLeft className="stroke-[#b3b3b3]" />
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0000008a]">
          <ChevronRight className="stroke-[#b3b3b3]" />
        </div>
        {path == 'search' && (
          <Input
            ref={inputRef}
            className="w-96"
            placeholder="What do you want to play?"
            icon={<Search className="stroke-[#b3b3b3]" size={20} />}
          />
        )}
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
    </nav>
  )
}
