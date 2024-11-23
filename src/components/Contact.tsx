import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section className="py-8">
      <div className="flex flex-wrap justify-center gap-6">
        {[
          { icon: Mail, text: 'tahirasalahuddin77@gmail.com', href: '#' },
          { icon: Phone, text: '0327-2776927', href: '#' },
          { icon: Github, text: 'https://github.com/Tahiraibrahim', href: '#' },
          { icon: Linkedin, text: 'linkedin.com/in/tahira-ibrahim-g-18761b26b', href: '#' }
        ].map(({ icon: Icon, text, href }) => (
          <a
            key={text}
            href={href}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0F172A] to-[#1E293B] rounded-full 
                     hover:from-[#00DC82]/20 hover:to-[#36E4DA]/20 transition-all text-gray-300 hover:text-white
                     border border-[#36E4DA]/20 hover:border-[#36E4DA]/40"
          >
            <Icon className="w-5 h-5" />
            <span>{text}</span>
          </a>
        ))}
      </div>
    </section>
  )
}