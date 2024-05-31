export default function FooterLegal() {
  return (
    <div className="bg-black mb-32 border-t border-[#292929] px-6 py-4 text-white">
      <div className="container mx-auto mt-11 flex justify-between text-sm">
        <div className="flex space-x-4 text-subdued">
          <a href="#">Legal</a>
          <a href="#">Safety & Privacy Center</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Settings</a>
          <a href="#">About Ads</a>
          <a href="#">Accessibility</a>
        </div>
        <div className="flex space-x-4 text-subdued">© 2024 Spotify AB</div>
      </div>
    </div>
  )
}
