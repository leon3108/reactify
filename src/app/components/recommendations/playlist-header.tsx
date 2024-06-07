import { Button } from '@/ui/button'

export default function PlaylistHeader({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-between">
      <h3 className="text-2xl font-bold">{name}</h3>
      <Button variant="link" className="font-semibold">
        Show all
      </Button>
    </div>
  )
}
