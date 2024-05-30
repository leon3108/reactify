import { Facebook, Instagram, Twitter } from "lucide-react";

export default function FooterLinks() {
  return (
    <div className="bg-black text-white py-8 px-6">
      <div className="container mx-auto flex justify-between">
        <div>
          <h4 className="font-bold">Company</h4>
          <ul>
            <li>About</li>
            <li>Jobs</li>
            <li>For the Record</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Communities</h4>
          <ul>
            <li>For Artists</li>
            <li>Developers</li>
            <li>Advertising</li>
            <li>Investors</li>
            <li>Vendors</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Useful links</h4>
          <ul>
            <li>Support</li>
            <li>Free Mobile App</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Spotify Plans</h4>
          <ul>
            <li>Premium Individual</li>
            <li>Premium Duo</li>
            <li>Premium Family</li>
            <li>Premium Student</li>
            <li>Spotify Free</li>
          </ul>
        </div>
        <div className="flex space-x-4">
          <Instagram/>
          <Twitter/>
          <Facebook/>
        </div>
      </div>
    </div>
  )
}
