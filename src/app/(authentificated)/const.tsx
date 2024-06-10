import { Home, Search } from 'lucide-react'
import { GroupLinks, Link, MusicGenre } from './type'

export const BadgeList = ['All', 'Music', 'Podcasts']

export const MusicType = ['Playlist', 'Artists', 'Albums', 'Podcasts & Shows']

export const LegalList: Link[] = [
  { name: 'Legal', url: '#' },
  { name: 'Safety & Privacy Center', url: '#' },
  { name: 'Privacy Policy', url: '#' },
  { name: 'Cookie Settings', url: '#' },
  { name: 'About Ads', url: '#' },
  { name: 'Accessibility', url: '#' },
]

// Panel Size
export const PANEL_SIZE = {
  default: 20,
  min: 4,
  small: 10,
  medium: 15,
  large: 25,
  max: 78,
}

// Icon
export const ICON_SIZE = 24

// Color
export const TEXT_GRAY_500 = '#a7a6a7'

export const MenuList = [
  { route: '/', name: 'Home', Icon: <Home /> },
  { route: '/search', name: 'search', Icon: <Search /> },
]

export const browseList: MusicGenre[] = [
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
    color: '#15883e',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005caf90db33162770f13ba3da4498',
    name: 'French Variety',
    color: '#1a2958',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005cafa59f90c077c9f618fd0dde30',
    name: 'Latin',
    color: '#e61873',
  },
  {
    imageURL: 'https://t.scdn.co/images/7262179db37c498480ef06bfacb60310.jpeg',
    name: 'Podcasts Charts',
    color: '#0376d3',
  },
  {
    imageURL: 'https://t.scdn.co/images/209c867f5bb34076b0dcc9deeb1868e6',
    name: 'Podcast New Releases',
    color: '#b45cbe',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67656300005f1f03ed81931f60d88bc32061af',
    name: 'Video Podcasts',
    color: '#b180dd',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67656300005f1f2621b138bfec0b4e83848f4d',
    name: 'Only on Spotify',
    color: '#ce5b0d',
  },
  {
    imageURL:
      'https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg',
    name: 'Charts',
    color: '#ae76e6',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005caf097a46192e6bb67e52cdff60',
    name: 'Summer',
    color: '#0d6953',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005cafda4f52a7f308749ded086428',
    name: 'In the car',
    color: '#838383',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005caf691c62e440939bad37e19aee',
    name: 'Rock',
    color: '#de3832',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005caf261be30d13d3ca9a8aa2dbde',
    name: 'Mood',
    color: '#267fe0',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005caf55906cbcb72189eeb019c31d',
    name: 'Discover',
    color: '#b083cf',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005caf5750b2f5a65a45d68767bc8f',
    name: 'Dance/Electronic',
    color: '#169144',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005caf27358e32e4d66bd110ba8341',
    name: 'Indie',
    color: '#2b7e85',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200008e2c56ab0d1edf8ddb0852b67f5b',
    name: 'Workout',
    color: '#8d8d8d',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005caff4e38be86ca48a3b10884ae3',
    name: 'R&B',
    color: '#ce592e',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005caf4defad8ad01df6b84bbd497a',
    name: 'Afro',
    color: '#e61e32',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005caf013ee3c983e6f60bf28bad5a',
    name: 'K-pop',
    color: '#148a08',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005cafc183ce90cc024604e3cb4f06',
    name: 'Chill',
    color: '#58858e',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67706f00000002b70e0223f544b1faa2e95ed0',
    name: 'Sleep',
    color: '#1d396d',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005caf841438594e9c80a8fc84e8fe',
    name: 'Party',
    color: '#f40595',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005cafb74ef3eeece01c4b0ebca9c6',
    name: 'Dancehall/Zouk',
    color: '#006450',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005caf8ad1a7064fb32e992f039b25',
    name: 'Reggae',
    color: '#d2782b',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005caf056be2c08a7d6029fdd22158',
    name: 'At Home',
    color: '#0d6953',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005caf207a7dcb016d328b5240b639',
    name: 'Decades',
    color: '#42556f',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005caf5e01bba1d7203ceb6b57ec55',
    name: 'Alternative',
    color: '#8c9baf',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005cafea001f43435a0039374a202b',
    name: 'Love',
    color: '#d85b7c',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005cafefa737b67ec51ec989f5a51d',
    name: 'Metal',
    color: '#d1273c',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005caf3ab231a85c95565d206d2614',
    name: 'Jazz',
    color: '#103369',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005caf2360f600ea2912a0fe299e2d',
    name: 'Trending',
    color: '#0d73ec',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005cafcf397dbb73818b5b5deb84a8',
    name: 'Equal',
    color: '#148a08',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005cafe760702de052fbefea27064a',
    name: 'Radar',
    color: '#a56752',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005caf12809992dfc5b318892ea07b',
    name: 'Classical',
    color: '#834b36',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005cafcc70a3c2e4c71398708bdc4a',
    name: 'Folk & Acoustic',
    color: '#c45620',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67706f00000002e4eadd417a05b2546e866934',
    name: 'Focus',
    color: '#52364e',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005cafd82e2c83fe100a89e9cbb2a2',
    name: 'Soul',
    color: '#e7048b',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005caf51565028ee4188dbee2e4aa5',
    name: 'Netflix',
    color: '#ed2d20',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005caf8a04560a209b3f32165ea8a2',
    name: 'Kids & Family',
    color: '#9066a6',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005cafdad1281e13697e8d8cf8f347',
    name: 'Student',
    color: '#b62592',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005caf26dd3719e8824756914ae61f',
    name: 'Gaming',
    color: '#f4015c',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005caf8dec632effd9735fa8aba06e',
    name: 'Wellness',
    color: '#aa6756',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005cafb2cdd7a95b0a5444aa15cfb5',
    name: 'Punk',
    color: '#193261',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005cafa6ee95dc83af715115f40522',
    name: 'Ambient',
    color: '#3b7e93',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005cafc0d2222b4c6441930e1a386e',
    name: 'Country',
    color: '#e23d20',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005caff22ac5cab318d550b593ffac',
    name: 'Blues',
    color: '#b66041',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005caf3271ef796498ae4f97db81e2',
    name: 'Arab',
    color: '#0075e5',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005caf56eef06f4b98ea3ed5ffc8d5',
    name: 'Travel',
    color: '#01846b',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005caf8ba1febbb4f77336b6f9aace',
    name: 'Caribbean',
    color: '#0075e5',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005cafb973ab1288f74f333e7e2e22',
    name: 'Songwriters',
    color: '#921535',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005cafbbf84e26e69a78883118913c',
    name: 'Nature & Noise',
    color: '#3b7e93',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005cafbb0e4ea229824157eee7467d',
    name: 'Funk & Disco',
    color: '#f2103b',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005caf9571e2fc2a85d91eda472f04',
    name: 'Frequency',
    color: '#0075e5',
  },
  {
    imageURL: 'https://t.scdn.co/images/37732285a0ff4e24987cdf5c45bdf31f.png',
    name: 'Tastemakers',
    color: '#f4015c',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005caf50cfe3fbd3a9fb8810da45ea',
    name: 'Glow',
    color: '#0075e5',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005caf14030380532b34badbf0a229',
    name: 'Spotify Singles',
    color: '#777676',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67706f00000002c19c5f13f8b3ff2d73ff00bc',
    name: 'Anime',
    color: '#f11164',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67706f000000028ed1a5002b96c2ea882541b2',
    name: 'Instrumental',
    color: '#4a7b9f',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005cafe53d71d0920a4f1f441d803c',
    name: 'Cooking & Dining',
    color: '#c25a22',
  },
  {
    imageURL:
      'https://i.scdn.co/image/ab67fb8200005cafcc1499bbb8565f490858c2bc',
    name: 'Fresh Finds',
    color: '#fe008e',
  },
]

export const FooterLinks: GroupLinks[] = [
  {
    title: 'Company',
    links: [
      { name: 'About', url: '#' },
      { name: 'Jobs', url: '#' },
      { name: 'For the Record', url: '#' },
    ],
  },
  {
    title: 'Communities',
    links: [
      { name: 'For Artists', url: '#' },
      { name: 'Developers', url: '#' },
      { name: 'Advertising', url: '#' },
      { name: 'Investors', url: '#' },
      { name: 'Vendors', url: '#' },
    ],
  },
  {
    title: 'Useful links',
    links: [
      { name: 'Support', url: '#' },
      { name: 'Free Mobile App', url: '#' },
    ],
  },
  {
    title: 'Spotify Plans',
    links: [
      { name: 'Premium Individual', url: '#' },
      { name: 'Premium Duo', url: '#' },
      { name: 'Premium Family', url: '#' },
      { name: 'Premium Student', url: '#' },
      { name: 'Spotify Free', url: '#' },
    ],
  },
]
