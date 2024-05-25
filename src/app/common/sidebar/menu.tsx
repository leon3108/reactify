import { Card, CardContent } from '@/ui/card'
import { Home, Search } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ImperativePanelHandle } from 'react-resizable-panels'
import { SIZE_WITHOUT_ICON, TEXT_GRAY_500 } from './const'

export default function Menu({
  panelRef,
}: {
  panelRef: React.RefObject<ImperativePanelHandle>
}) {
  const pathname = usePathname()

  return (
    <Card className='bg-base'>
      <CardContent className="mt-2 space-y-2">
        <div className="flex space-x-2">
          <Home
            className="hover:cursor-pointer"
            color={pathname == '/' ? 'white' : TEXT_GRAY_500}
          />
          {panelRef.current &&
          panelRef.current.getSize() > SIZE_WITHOUT_ICON ? (
            <Link
              href="/"
              className={`${pathname == '/' ? 'text-white ' : 'text-gray-500 '} font-bold`}
            >
              Home
            </Link>
          ) : null}
        </div>
        <div className="flex space-x-2">
          <Search
            className="hover:cursor-pointer"
            color={pathname == '/search' ? 'white' : TEXT_GRAY_500}
          />
          {panelRef.current &&
          panelRef.current.getSize() > SIZE_WITHOUT_ICON ? (
            <Link
              href="/search"
              className={`${pathname == '/search' ? 'text-white ' : 'text-gray-500 '} font-bold`}
            >
              Search
            </Link>
          ) : null}
        </div>
      </CardContent>
    </Card>
  )
}
