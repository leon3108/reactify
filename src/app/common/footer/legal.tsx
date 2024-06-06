import { LegalList } from '@/app/const'

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
