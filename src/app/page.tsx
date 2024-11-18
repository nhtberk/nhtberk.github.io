import Link from 'next/link'
import { FiGithub, FiLinkedin, FiMail, FiCode, FiDatabase, FiTool, FiSmartphone, } from 'react-icons/fi'
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql,
  SiGit, SiVisualstudiocode,
  SiFirebase,
  SiBootstrap,
  SiPostman
} from 'react-icons/si'
import { SiAngular, SiFlutter } from 'react-icons/si'
import Image from 'next/image'
import '../../public/styles.css'

const technologies = [
  {
    category: "Frontend",
    icon: <FiCode className="w-6 h-6" />,
    description: "Modern ve responsive web uygulamaları",
    items: [
      { name: "Angular", icon: <SiAngular className="w-8 h-8" /> },
      { name: "React", icon: <SiReact className="w-8 h-8" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-8 h-8" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="w-8 h-8" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="w-8 h-8" /> },
    ]
  },
  {
    category: "Backend",
    icon: <FiDatabase className="w-6 h-6" />,
    description: "Güvenli ve ölçeklenebilir API'ler",
    items: [
      { name: "Node.js", icon: <SiNodedotjs className="w-8 h-8" /> },
      { name: "Express", icon: <SiExpress className="w-8 h-8" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-8 h-8" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8" /> },
    ]
  },
  {
    category: "Mobile",
    icon: <FiSmartphone className="w-6 h-6" />,
    description: "Cross-platform mobil uygulamalar",
    items: [
      { name: "React Native", icon: <SiReact className="w-8 h-8" /> },
      { name: "Flutter", icon: <SiFlutter className="w-8 h-8" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="w-8 h-8" /> },
      { name: "Firebase", icon: <SiFirebase className="w-8 h-8" /> },
    ]
  },
  {
    category: "Araçlar",
    icon: <FiTool className="w-6 h-6" />,
    description: "Geliştirme süreçleri",
    items: [
      { name: "Git", icon: <SiGit className="w-8 h-8" /> },
      { name: "VS Code", icon: <SiVisualstudiocode className="w-8 h-8" /> },
      { name: "Postman", icon: <SiPostman className="w-8 h-8" /> },
    ]
  }
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] bg-gradient-to-b from-background to-primary/5 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="flex flex-col items-center space-y-6">
            <div className="relative w-40 h-40 mb-4">
              <Image
                src="/profile.jpg"
                alt="Nihat Berk ÖZ"
                fill
                priority
                className="rounded-full object-cover border-4 border-primary/20 profile-image-hover"
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-6xl font-bold tracking-tight">
                <span className="text-primary">Merhaba</span>, Ben Nihat Berk ÖZ
              </h1>
              <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
                Mobil ve web teknolojileri konusunda uzmanlaşmış bir Full Stack geliştirici.
                React Native ile cross-platform mobil uygulamalar geliştiriyor,
                modern web teknolojileri ile kullanıcı dostu arayüzler tasarlıyorum.
                Backend tarafında Node.js ve mikroservis mimarileri ile
                ölçeklenebilir çözümler sunuyorum.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6">
            <SocialLink href="https://github.com/nhtberk" icon={<FiGithub />} />
            <SocialLink href="https://linkedin.com/in/nhtberk" icon={<FiLinkedin />} />
            <SocialLink href="mailto:tahinkreb@gmail.com" icon={<FiMail />} />
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/projects"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all hover:scale-105"
            >
              Projelerimi İncele
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-primary rounded-lg hover:bg-primary/10 transition-all hover:scale-105"
            >
              İletişime Geç
            </Link>
            <Link
              href="/cv"
              className="px-8 py-4 border border-primary rounded-lg hover:bg-primary/10 transition-all hover:scale-105"
            >
              Cv
            </Link>
          </div>
        </div>
      </section>
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Teknolojiler</h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Projelerimde kullandığım ve uzmanı olduğum teknolojiler
            </p>
          </div>

          <div className="grid gap-16">
            {technologies.map((tech) => (
              <div key={tech.category} className="space-y-8">
                <div className="flex items-center justify-center gap-3 text-center">
                  {tech.icon}
                  <h3 className="text-2xl font-semibold">{tech.category}</h3>
                </div>
                <p className="text-center text-foreground/70">{tech.description}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {tech.items.map((item) => (
                    <TechCard key={item.name} {...item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="p-3 rounded-full hover:bg-primary/10 transition-colors"
    >
      <div className="flex h-6 items-center justify-center w-6">
        {icon}
      </div>
    </Link>
  )
}

function TechCard({ name, icon}: { name: string; icon: React.ReactNode; }) {
  return (
    <div className="group p-6 rounded-xl border bg-background hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col items-center">
        <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        <span className="font-medium mb-3">{name}</span>
      </div>
    </div>
  )
}