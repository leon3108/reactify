import { Link } from '../../type'

const LegalList: Link[] = [
  { name: 'Legal', url: '#' },
  { name: 'Safety & Privacy Center', url: '#' },
  { name: 'Privacy Policy', url: '#' },
  { name: 'Cookie Settings', url: '#' },
  { name: 'About Ads', url: '#' },
  { name: 'Accessibility', url: '#' },
]

export default function Legal() {
  return (
    <div className="bg-black mb-32 border-t border-[#292929] px-6 py-4 text-white">
      <div className="mx-auto mt-11 flex justify-between text-sm">
        <div className="flex space-x-4 text-subdued">
          {LegalList.map((item, index) => (
            <a href={item.url} key={index}>
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex space-x-4 text-subdued">© 2024 Spotify AB</div>
      </div>
    </div>
  )
}
