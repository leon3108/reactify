import { formatTime } from '@/lib/utils'
import { Slider } from '@/ui/slider'

type PlayerSliderProps = {
  currentTime: number
  duration: number
  playerValue: number
  onValueChange: (value: number[]) => void
}

export default function PlayerSlider({
  currentTime,
  duration,
  playerValue,
  onValueChange,
}: PlayerSliderProps) {
  return (
    <div className="flex w-full space-x-2">
      <span>{formatTime(currentTime)}</span>
      <Slider
        value={[playerValue]}
        defaultValue={[0]}
        onValueChange={onValueChange}
      />
      <span>{formatTime(duration)}</span>
    </div>
  )
}
