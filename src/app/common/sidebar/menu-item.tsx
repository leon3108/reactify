import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactElement, cloneElement } from 'react'
import { ICON_SIZE, TEXT_GRAY_500 } from './const'

export default function MenuItem({
  panelSizeIsBiggerThanMin,
  route,
  name,
  Icon,
}: {
  panelSizeIsBiggerThanMin: boolean | null
  route: string
  name: string
  Icon: ReactElement
}) {
  const pathname = usePathname()
  return (
    <Link
      href={route}
      className={`${pathname == route ? 'text-white ' : 'text-gray-500 '} flex space-x-2 font-bold`}
    >
      {Icon &&
        cloneElement(Icon, {
          size: ICON_SIZE,
          className: 'hover:cursor-pointer',
          color: pathname === route ? 'white' : TEXT_GRAY_500,
        })}
      {panelSizeIsBiggerThanMin ? <p>{name}</p> : null}
    </Link>
  )
}
