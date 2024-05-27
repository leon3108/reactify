import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/ui/card'
import { Home, Search } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ImperativePanelHandle } from 'react-resizable-panels'
import { ICON_SIZE, PANEL_SIZE, TEXT_GRAY_500 } from './const'

export default function Menu({
  panelRef,
}: {
  panelRef: React.RefObject<ImperativePanelHandle>
}) {
  const pathname = usePathname()

  return (
    <Card
      className={cn(
        'h-28 bg-base ',
        panelRef.current?.getSize() == PANEL_SIZE.min
          ? 'items-center justify-between'
          : '',
      )}
    >
      <CardContent
        className={cn(
          'mt-2 flex flex-col justify-evenly h-full',
          panelRef.current?.getSize() == PANEL_SIZE.min ? 'items-center ' : '',
        )}
      >
        <Link
          href="/"
          className={`${pathname == '/' ? 'text-white ' : 'text-gray-500 '} flex space-x-2 font-bold`}
        >
          <Home
            size={ICON_SIZE}
            className="hover:cursor-pointer"
            color={pathname == '/' ? 'white' : TEXT_GRAY_500}
          />
          {panelRef.current && panelRef.current.getSize() > PANEL_SIZE.min ? (
            <p>Home</p>
          ) : null}
        </Link>
        <Link
          href="/search"
          className={`${pathname == '/search' ? 'text-white ' : 'text-gray-500 '} flex space-x-2 font-bold`}
        >
          <Search
            size={ICON_SIZE}
            className="hover:cursor-pointer"
            color={pathname == '/search' ? 'white' : TEXT_GRAY_500}
          />
          {panelRef.current && panelRef.current.getSize() > PANEL_SIZE.min ? (
            <p>Search</p>
          ) : null}
        </Link>
      </CardContent>
    </Card>
  )
}
