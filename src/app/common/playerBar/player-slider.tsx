import { formatTime } from '@/lib/utils'
import { Slider } from '@/ui/slider'
import React from 'react'

type PlayerSliderProps = {
  currentTime: number
  duration: number
  playerValue: number
  onValueChange: (value: number[]) => void
}

const PlayerSlider: React.FC<PlayerSliderProps> = ({
  currentTime,
  duration,
  playerValue,
  onValueChange,
}) => (
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

export default PlayerSlider
