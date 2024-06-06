import { FooterLinks } from '@/app/components/const'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Links() {
  return (
    <div className="bg-black py-8 text-white">
      <div className=" flex justify-between">
        <div className="flex w-4/6 justify-between">
          {FooterLinks.map((item, index) => (
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
        </div>
        <div className="flex space-x-4">
          <Instagram />
          <Twitter />
          <Facebook />
        </div>
      </div>
    </div>
  )
}
