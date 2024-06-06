
import { Playlist } from '../common/type/playlist'
import likedSongs from '/public/liked-songs-300.png'

export const RecentsListeninglist = [
  {
    src: likedSongs,
    title: 'leno + Leno',
  },
  {
    src: likedSongs,
    title: 'Liked Songs',
  },
  {
    src: 'https://i.scdn.co/image/ab67616d00001e02d726484fcdb087409ded0765',
    title: 'Toko dombi',
  },
  {
    src: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb34925ec32cd90699e1021914/1/en/default',
    title: 'Daily Mix 2',
  },
  {
    src: 'https://i.scdn.co/image/ab67616d00001e02729099a8ed5ab9795eee1c9d',
    title: 'JAAFAR',
  },
  {
    src: 'https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/aAbca4VNfzWuUCQ_FGiEFA==/bmVuZW5lbmVuZW5lbmVuZQ==',
    title: 'Discover Weekly',
  },
  {
    src: likedSongs,
    title: 'Daily Drive',
  },
  {
    src: 'https://i.scdn.co/image/ab67616d00001e02ff32827efb25248cd37819e1',
    title: 'Trix city 2',
  },
]

export const RecommendationsList: Playlist[] = [
  {
    name: 'Made for Leon',
    items: [
      {
        src: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb34925ec32cd90699e1021914/1/en/default',
        title: 'Daily Mix 1',
        description: 'B.B Jacques, Népal, Lujipeka and more',
        artist: '',
      },
      {
        src: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb92f66833fe2a9a854f888042/2/en/default',
        title: 'Daily Mix 2',
        description: 'Laylow, Luidji, Zinée and more',
        artist: '',
      },
      {
        src: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb2b550c4ab38ac680700abc42/3/en/default',
        title: 'Daily Mix 3',
        description: 'Malo, Jwles, Luther and more',
        artist: '',
      },
      {
        src: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb976140e777ab37c7f262a910/4/en/default',
        title: 'Daily Mix 4',
        description: 'Dinos, Lomepal, Lefa and more',
        artist: '',
      },
      {
        src: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb400bb60cc514557fcf3c06a7/5/en/default',
        title: 'Daily Mix 5',
        description: 'Envy, Thimajin, Fredz and more',
        artist: '',
      },
      {
        src: 'https://newjams-images.scdn.co/image/ab67647800003f8a/dt/v3/release-radar/ab6761610000e5eb2edc26862c486859b32591bb/en',
        title: 'Release Radar',
        description: 'Catch all the latest music from artist you like',
        artist: '',
      },
    ],
  },
  {
    name: 'Jump back in',
    items: [
      {
        src: '	https://i.scdn.co/image/ab67616d00001e029f16b4e122ad65083b02d659',
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
    items: [
      {
        src: 'https://i.scdn.co/image/ab67616d00001e02b629878b4e36e9937d5a452e',
        title: 'garder le sourire',
        description: 'arøne',
        artist: '',
      },
      {
        src: 'https://i.scdn.co/image/ab67616d00001e02ad9f89c7cd76f76eb0c1fc3e',
        title: 'Cyborg',
        description: '',
        artist: 'Nekfeu',
      },
      {
        src: 'https://i.scdn.co/image/ab67616d00001e02d17080d3e3b8706f2147341d',
        title: "L'Amour",
        description: '',
        artist: 'Disiz',
      },
      {
        src: 'https://i.scdn.co/image/ab67616d00001e02805ae6e215ce80d74f51329b',
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

export const FooterLinks = [
  {
    title: 'Company',
    links: [
      { name: 'About', link: '#' },
      { name: 'Jobs', link: '#' },
      { name: 'For the Record', link: '#' },
    ],
  },
  {
    title: 'Communities',
    links: [
      { name: 'For Artists', link: '#' },
      { name: 'Developers', link: '#' },
      { name: 'Advertising', link: '#' },
      { name: 'Investors', link: '#' },
      { name: 'Vendors', link: '#' },
    ],
  },
  {
    title: 'Useful links',
    links: [
      { name: 'Support', link: '#' },
      { name: 'Free Mobile App', link: '#' },
    ],
  },
  {
    title: 'Spotify Plans',
    links: [
      { name: 'Premium Individual', link: '#' },
      { name: 'Premium Duo', link: '#' },
      { name: 'Premium Family', link: '#' },
      { name: 'Premium Student', link: '#' },
      { name: 'Spotify Free', link: '#' },
    ],
  },
]