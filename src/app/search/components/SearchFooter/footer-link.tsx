import { Facebook, Instagram, Twitter } from 'lucide-react'

const footerList = [
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

export default function FooterLinks() {
  return (
    <div className="bg-black px-6 py-8 text-white">
      <div className="container mx-auto flex justify-between">
        {footerList.map((item, index) => (
          <div key={index}>
            <h4 className="font-bold">{item.title}</h4>
            <ul>
              {item.links.map((link, index) => (
                <li key={index} className="text-subdued">
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex space-x-4">
          <Instagram />
          <Twitter />
          <Facebook />
        </div>
      </div>
    </div>
  )
}
