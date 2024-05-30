import Image from 'next/image'

// playlist, albums, single, podcats
const RecentsSearchesList = [
  {
    imageUrl:
      '	https://i.scdn.co/image/ab676161000051746f36a5179d65c8d74a23a866',
    title: 'Zinée',
    description: 'Artist',
  },
  {
    imageUrl:
      'https://i.scdn.co/image/ab67616d00001e02d726484fcdb087409ded0765',
    title: 'Imad',
    description: '2024 - THEODORT',
  },
  {
    imageUrl:
      '	https://i.scdn.co/image/ab67656300005f1fc00fedcb8fcbf8a448d6c4d2',
    title: 'Popcorn',
    description: 'DomingoTV',
  },
]

export default function RecentsSearches() {
  return (
    <section className="mt-10 flex h-full w-full flex-col">
      <h2 className="text-xl font-extrabold">Recents Searches</h2>
      <div className="flex space-x-2">
        {RecentsSearchesList.map((item) => (
          <div className="hover:bg-card" key={item.title}>
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={200}
              height={200}
            />
            <p className="text-white">{item.title}</p>
            <p className="text-subdued">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
