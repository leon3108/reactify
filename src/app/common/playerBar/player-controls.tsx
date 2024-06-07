import { Button } from '@/ui/button'
import {
  CirclePause,
  CirclePlay,
  Repeat2,
  Shuffle,
  SkipBack,
  SkipForward,
} from 'lucide-react'

type PlayerControlsProps = {
  isPlaying: boolean
  playPause: () => void
}

export default function PlayerControls({
  isPlaying,
  playPause,
}: PlayerControlsProps) {
  const PlayerControlsList = [
    { icon: <Shuffle />, label: 'Shuffle', onClick: () => {} },
    { icon: <SkipBack />, label: 'Skip Back', onClick: () => {} },
    {
      icon: isPlaying ? <CirclePause /> : <CirclePlay />,
      label: 'Play',
      onClick: playPause,
    },
    { icon: <SkipForward />, label: 'Skip Forward', onClick: () => {} },
    { icon: <Repeat2 />, label: 'Repeat', onClick: () => {} },
  ]

  return (
    <div className="flex space-x-3">
      {PlayerControlsList.map((Control) => (
        <Button
          size={'icon'}
          variant={'link'}
          onClick={Control.onClick}
          key={Control.label}
        >
          {Control.icon}
        </Button>
      ))}
    </div>
  )
}
