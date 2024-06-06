import { MenuList, PANEL_SIZE } from '@/app/const'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/ui/card'
import React from 'react'
import { ImperativePanelHandle } from 'react-resizable-panels'
import MenuItem from './menu-item'

export default function Menu({
  panelRef,
}: {
  panelRef: React.RefObject<ImperativePanelHandle>
}) {
  const panelSizeIsMin = panelRef.current?.getSize() == PANEL_SIZE.min
  const panelSizeIsBiggerThanMin =
    panelRef.current && panelRef.current.getSize() > PANEL_SIZE.min

  return (
    <Card
      className={cn(
        'h-28 bg-base ',
        panelSizeIsMin ? 'items-center justify-between' : '',
      )}
    >
      <CardContent
        className={cn(
          'mt-2 flex h-full flex-col justify-evenly',
          panelSizeIsMin ? 'items-center ' : '',
        )}
      >
        {MenuList.map((item) => (
          <MenuItem
            key={item.route}
            panelSizeIsBiggerThanMin={panelSizeIsBiggerThanMin}
            {...item}
          />
        ))}
      </CardContent>
    </Card>
  )
}
