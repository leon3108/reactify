import FooterLegal from './legal'
import FooterLinks from './links'

export default function Footer() {
  return (
    <section className="h-full w-full">
      <FooterLinks />
      <FooterLegal />
    </section>
  )
}
