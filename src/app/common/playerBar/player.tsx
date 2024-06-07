'use client'

import PlayerControls from './player-controls'
import PlayerSlider from './player-slider'
import useSpaceKeyHandler, { useAudioPlayer } from './player.logic'

export default function Player({ volume }: { volume: number }) {
  const audioUrl =
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  const {
    audioRef,
    currentTime,
    duration,
    isPlaying,
    playPause,
    playerValue,
    handleValueChange,
  } = useAudioPlayer(audioUrl, volume)

  useSpaceKeyHandler(playPause)

  return (
    <section className="flex w-1/3 flex-col items-center justify-center 2xl:w-[800px]">
      <PlayerControls isPlaying={isPlaying} playPause={playPause} />
      <audio ref={audioRef} src={audioUrl}></audio>
      <PlayerSlider
        currentTime={currentTime}
        duration={duration}
        playerValue={playerValue}
        onValueChange={handleValueChange}
      />
    </section>
  )
}
