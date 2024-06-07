import {
  CirclePause,
  CirclePlay,
  Repeat2,
  Shuffle,
  SkipBack,
  SkipForward,
} from 'lucide-react'
import React from 'react'

type PlayerControlsProps = {
  isPlaying: boolean
  playPause: () => void
}

const PlayerControls: React.FC<PlayerControlsProps> = ({
  isPlaying,
  playPause,
}) => (
  <div className="flex space-x-4">
    <Shuffle />
    <SkipBack />
    <button onClick={playPause}>
      {isPlaying ? <CirclePause /> : <CirclePlay />}
    </button>
    <SkipForward />
    <Repeat2 />
  </div>
)

export default PlayerControls
