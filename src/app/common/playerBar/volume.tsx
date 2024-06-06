import { Slider } from '@/ui/slider'
import { Volume2, VolumeX } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'

export default function Volume({
  volume,
  setVolume,
}: {
  volume: number
  setVolume: Dispatch<SetStateAction<number>>
}) {
  const handleMutePlay = () => {
    if (volume === 0) {
      setVolume(50)
    } else {
      setVolume(0)
    }
  }

  return (
    <section className="flex w-1/3 items-center justify-end px-6">
      <div className="flex w-1/2 justify-end space-x-1 pl-10 pr-2">
        {volume == 0 ? (
          <VolumeX onClick={handleMutePlay} />
        ) : (
          <Volume2 onClick={handleMutePlay} />
        )}
        <Slider
          defaultValue={[volume]}
          value={[volume]}
          onValueChange={(value) => setVolume(value[0])}
        />
      </div>
    </section>
  )
}
