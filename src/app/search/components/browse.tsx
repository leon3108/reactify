import Image from 'next/image'

const browseList = [
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005caf474a477debc822a3a45c5acb',
    name: 'Music',
    color: '#dc148c',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab6765630000ba8a81f07e1ead0317ee3c285bfa',
    name: 'Podcasts',
    color: '#006450',
  },
  {
    imageURL:
      'https://concerts.spotifycdn.com/images/live-events_category-image.jpg',
    name: 'Live Events',
    color: '#8400e7',
  },
  {
    imageURL: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
    name: 'Made For You',
    color: '#1e3264',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112',
    name: 'New Releases',
    color: '#e8115b',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005caf446b6bbe01e6a8575587adc7',
    name: 'Hip-Hop',
    color: '#ba5d07',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005cafb917ac36dc0985e067cd2d87',
    name: 'Pop',
    color: '#148a08',
  },
]

function GridElement({
  item,
}: {
  item: { imageURL: string; name: string; color: string }
}) {
  return (
    <div
      className="relative h-40 overflow-hidden rounded-lg p-6"
      style={{ backgroundColor: item.color }}
    >
      <h2 className="text-2xl font-semibold text-white">{item.name}</h2>
      <div className="absolute bottom-0 right-0 rotate-12 transform">
        <Image
          src={item.imageURL}
          alt="Live Event"
          width={100}
          height={150}
          className="rounded-lg"
        />
      </div>
    </div>
  )
}

export default function Browse() {
  return (
    <section className="flex h-full w-full flex-col">
      <h3 className="text-xl font-extrabold">Browse All</h3>
      <div className="grid grid-cols-5 gap-4">
        {browseList.map((item) => (
          <GridElement item={item} key={item.name} />
        ))}
      </div>
    </section>
  )
}
