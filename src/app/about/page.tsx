import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import Link from 'next/link'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <div className="space-y-12">
        <section>
          <h1 className="text-4xl font-bold mb-6">Hakkımda</h1>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Merhaba! Ben Nihat Berk ÖZ. Full Stack Developer olarak modern web teknolojileri ve 
            mobil uygulama geliştirme alanında 2+ yıllık deneyime sahibim. Yazılım geliştirme 
            serüvenim üniversite yıllarında başladı ve o günden beri sürekli öğrenme ve gelişme 
            odaklı bir yaklaşım benimsedim.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Profesyonel Yolculuk</h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-4">
            Kariyerime RAIFFEISEN-TOURS RT-REISEN GMBH / RTK'da Frontend Developer olarak başladım. 
            Burada Angular framework'ü ile modern web uygulamaları geliştirerek, kullanıcı deneyimini 
            optimize eden çözümler ürettim. Aynı zamanda ADVICEAL'da Mobile Developer olarak Flutter 
            ile cross-platform mobil uygulamalar geliştirdim.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Bu süreçte edindiğim deneyimler, bana farklı teknolojileri entegre etme ve karmaşık 
            problemlere yaratıcı çözümler üretme becerisi kazandırdı. Özellikle kullanıcı odaklı 
            tasarım ve geliştirme konusunda uzmanlaştım.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Teknik Yaklaşımım</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Yazılım geliştirme süreçlerinde clean code prensiplerini ve modern geliştirme 
            pratiklerini benimsiyorum. Frontend'de Angular ve Flutter, backend'de Node.js 
            teknolojilerini kullanarak full-stack çözümler üretiyorum. Sürekli kendimi 
            geliştirmeye ve yeni teknolojileri öğrenmeye odaklanıyorum.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">İletişim</h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            Yeni projeler, iş birlikleri veya teknik konularda görüşmek için benimle 
            iletişime geçebilirsiniz.
          </p>
          <div className="flex gap-4">
            <Link 
              href="https://github.com/nhtberk" 
              className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
            >
              <FiGithub className="w-5 h-5" />
              <span>GitHub</span>
            </Link>
            <Link 
              href="https://linkedin.com/in/nhtberk" 
              className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
            >
              <FiLinkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </Link>
            <Link 
              href="mailto:tahinkreb@gmail.com" 
              className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
            >
              <FiMail className="w-5 h-5" />
              <span>Email</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}