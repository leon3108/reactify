'use client'

import { formatTime } from '@/lib/utils'
import { Slider } from '@/ui/slider'
import {
  CirclePause,
  CirclePlay,
  Repeat2,
  Shuffle,
  SkipBack,
  SkipForward,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import useSpaceKeyHandler from '../hooks/use-space-key-handler'

export default function Player({ volume }: { volume: number }) {
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioUrl =
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playerValue, setPlayerValue] = useState(0)

  if (audioRef.current != null) {
    audioRef.current.volume = volume / 100
  }

  useEffect(() => {
    if (audioUrl) {
      const audio = audioRef.current
      if (audio) {
        setDuration(audio.duration)
      }
    }
  }, [])

  const handleTimeUpdate = () => {
    if (audioUrl) {
      const audio = audioRef.current
      if (audio) {
        setCurrentTime(audio.currentTime)
        setPlayerValue((audio.currentTime * 100) / audio.duration)
      }
    }
  }

  const playPause = () => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  useSpaceKeyHandler(playPause)

  const handleValueChange = (value: number[]) => {
    if (audioUrl) {
      const audio = audioRef.current
      if (audio) {
        audio.currentTime = (value[0] * audio.duration) / 100
        setPlayerValue(value[0])
      }
    }
  }
  return (
    <section className="flex w-1/3 flex-col items-center justify-center 2xl:w-[800px]">
      <div className="flex space-x-4">
        <Shuffle />
        <SkipBack />
        <button onClick={playPause}>
          {isPlaying ? <CirclePause /> : <CirclePlay />}
        </button>
        <SkipForward />
        <Repeat2 />
      </div>
      <audio
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={handleTimeUpdate}
      ></audio>
      <div className="flex w-full space-x-2">
        <span>{formatTime(currentTime)}</span>
        <Slider
          value={[playerValue]}
          defaultValue={[0]}
          onValueChange={handleValueChange}
        />
        <span>{formatTime(duration)}</span>
      </div>
    </section>
  )
}
