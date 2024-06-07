import { useEffect, useRef, useState } from 'react'

const useSpaceKeyHandler = (handler: () => void) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === ' ') {
        handler()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handler])
}

export default useSpaceKeyHandler

export const useAudioPlayer = (audioUrl: string, initialVolume: number) => {
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playerValue, setPlayerValue] = useState(0)

  useEffect(() => {
    if (audioRef.current != null) {
      audioRef.current.volume = initialVolume / 100
    }
  }, [initialVolume])

  useEffect(() => {
    const audio = audioRef.current
    if (audio && audioUrl) {
      const setAudioData = () => setDuration(audio.duration)
      audio.addEventListener('loadeddata', setAudioData)
      return () => audio.removeEventListener('loadeddata', setAudioData)
    }
  }, [audioUrl])

  useEffect(() => {
    const handleTimeUpdate = () => {
      const audio = audioRef.current
      if (audio) {
        setCurrentTime(audio.currentTime)
        setPlayerValue((audio.currentTime * 100) / audio.duration)
      }
    }
    const audio = audioRef.current
    if (audio) {
      audio.addEventListener('timeupdate', handleTimeUpdate)
      return () => audio.removeEventListener('timeupdate', handleTimeUpdate)
    }
  }, [audioUrl])

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

  const handleValueChange = (value: number[]) => {
    const audio = audioRef.current
    if (audio) {
      audio.currentTime = (value[0] * audio.duration) / 100
      setPlayerValue(value[0])
    }
  }

  return {
    audioRef,
    currentTime,
    duration,
    isPlaying,
    playPause,
    playerValue,
    handleValueChange,
  }
}
