import { Button } from '@/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/ui/card'
import Image, { StaticImageData } from 'next/image'
import likedSongs from '/public/liked-songs-300.png'

const lists = [
  {
    name: 'Made for Leon',
    elements: [
      {
        src: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb34925ec32cd90699e1021914/1/en/default",
        title: 'Daily Mix 1',
        description: 'B.B Jacques, Népal, Lujipeka and more',
        artist: '',
      },
      {
        src: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb92f66833fe2a9a854f888042/2/en/default",
        title: 'Daily Mix 2',
        description: 'Laylow, Luidji, Zinée and more',
        artist: '',
      },
      {
        src: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb2b550c4ab38ac680700abc42/3/en/default",
        title: 'Daily Mix 3',
        description: 'Malo, Jwles, Luther and more',
        artist: '',
      },
      {
        src: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb976140e777ab37c7f262a910/4/en/default",
        title: 'Daily Mix 4',
        description: 'Dinos, Lomepal, Lefa and more',
        artist: '',
      },
      {
        src: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb400bb60cc514557fcf3c06a7/5/en/default",
        title: 'Daily Mix 5',
        description: 'Envy, Thimajin, Fredz and more',
        artist: '',
      },
      {
        src: "https://newjams-images.scdn.co/image/ab67647800003f8a/dt/v3/release-radar/ab6761610000e5eb2edc26862c486859b32591bb/en",
        title: 'Release Radar',
        description: 'Catch all the latest music from artist you like',
        artist: '',
      },
    ],
  },
  {
    name: 'Jump back in',
    elements: [
      {
        src: "	https://i.scdn.co/image/ab67616d00001e029f16b4e122ad65083b02d659",
        title: 'Osmin',
        description: '',
        artist: 'Zinée',
      },
      {
        src: 'https://i.scdn.co/image/ab67616d00001e028bf2a471579eed48772f5b1e',
        title: 'Cannelloni',
        description: '',
        artist: 'SCH',
      },
      {
        src: '	https://i.scdn.co/image/ab67616d00001e02701a315dea23417e89e72707',
        title: 'M1NDSET',
        description: '',
        artist: 'Take a Mic',
      },
    ],
  },
  {
    name: 'Recently played',
    elements: [
      {
        src: "https://i.scdn.co/image/ab67616d00001e02b629878b4e36e9937d5a452e",
        title: 'garder le sourire',
        description: 'arøne',
        artist: '',
      },
      {
        src: "https://i.scdn.co/image/ab67616d00001e02ad9f89c7cd76f76eb0c1fc3e",
        title: 'Cyborg',
        description: '',
        artist: 'Nekfeu',
      },
      {
        src: "https://i.scdn.co/image/ab67616d00001e02d17080d3e3b8706f2147341d",
        title: "L'Amour",
        description: "",
        artist: 'Disiz',
      },
      {
        src: "https://i.scdn.co/image/ab67616d00001e02805ae6e215ce80d74f51329b",
        title: 'WINNTERMANIA',
        description: '',
        artist: 'winnterzuko',
      },
      {
        src: likedSongs,
        title: 'Daily Mix 2',
        description: 'Népal, Dinos, La Fève and more',
        artist: '',
      },
      {
        src: likedSongs,
        title: 'Daily Mix 7',
        description: 'Lomepal, Orelsan, Columbine and more',
        artist: '',
      },
      {
        src: likedSongs,
        title: 'Release Radar',
        description: 'Catch all the latest music from artist you like',
        artist: '',
      },
    ],
  },
]

function Element({
  src,
  title,
  description,
  artist,
}: {
  src: StaticImageData | string
  title: string
  description: string
  artist: string
}) {
  return (
    <Card className="h-80 w-56 border-none">
      <CardHeader>
        <CardTitle className="text-base font-semibold text-white">
          <div className='flex justify-center'>
          <Image
            src={src}
            alt="image cover of the playlist"
            width={200}
            height={200}
            className="rounded-lg"
            />
            </div>
            {title}
        </CardTitle>
        <CardDescription className=" text-subdued">
          {description}
          {artist}
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  )
}

function PlaylistHeader({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-between">
      <h3 className="text-2xl font-bold">{name}</h3>
      <Button variant="link" className="font-semibold">
        Show all
      </Button>
    </div>
  )
}

export default function Recommendations() {
  return (
    <section className="">
      {lists.map((list, index) => (
        <div key={index}>
          <PlaylistHeader name={list.name} />
          <div className="flex w-full space-x-1">
            {list.elements.map((item, index) => (
              <Element
                key={index}
                src={item.src}
                artist={item.artist}
                description={item.description}
                title={item.title}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
