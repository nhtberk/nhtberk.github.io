import { FiMail, FiPhone, FiMapPin, FiLinkedin } from 'react-icons/fi'
import PDFDownloadButton from '../components/PDFDownloadButton'

export default function CV() {
    const cv = {
        kisiselBilgiler: {
            isim: "Nihat Berk ÖZ",
            unvan: "Full Stack Developer",
            email: "tahinkreb@gmail.com",
            telefon: "+90 5435069900",
            lokasyon: "Antalya, Türkiye",
            linkedin: "linkedin.com/in/nhtberk",
            ozet: "Full Stack Developer olarak 2+ yıllık deneyimimle, modern web teknolojileri ve mobil uygulama geliştirme alanında uzmanlaşmış durumdayım. Angular ve Flutter gibi güncel teknolojilerle geliştirdiğim projelerde, kullanıcı deneyimini merkeze alan yaklaşımımla öne çıkıyorum. Backend tarafında Node.js ve veritabanı teknolojileriyle ölçeklenebilir sistemler tasarlıyor, mikroservis mimarileri ve modern geliştirme pratiklerini aktif olarak kullanıyorum. Sürekli öğrenmeye olan tutkum ve problem çözme becerim ile, karmaşık iş gereksinimlerini etkili teknik çözümlere dönüştürüyorum. Takım çalışmasına yakın, iletişimi güçlü ve yenilikçi çözümler üretmeye odaklı bir geliştirici olarak, projelere değer katmaya devam ediyorum."
        },
        egitim: [
            {
                okul: "Karabük Üniversitesi",
                bolum: "Bilgisayar Mühendisliği",
                yil: "2017 - 2022",
                not: "2.77/4.00",
                detay: "Yazılım Mühendisliği, Veri Yapıları, Algoritma Analizi, Web Teknolojileri"
            }
        ],
        deneyimler: [
            {
                sirket: "RAIFFEISEN-TOURS RT-REISEN GMBH / RTK ",
                pozisyon: "Frontend Developer",
                tarih: "2022 Haziran - Devam",
                aciklama: [
                    "Angular ile modern web uygulamaları geliştirdim",
                    "Responsive ve kullanıcı dostu arayüzler tasarladım",
                    "Component tabanlı mimari ile yeniden kullanılabilir UI bileşenleri oluşturdum",
                    "UI/UX tasarım prensiplerini uygulayarak kullanıcı deneyimini optimize ettim"
                ]
            },
            {
                sirket: "ADVICEAL",
                pozisyon: "Mobile Developer",
                tarih: "2022 Haziran - Devam",
                aciklama: [
                    "Flutter ile cross-platform mobil uygulamalar geliştirdim",
                    "State management (Provider, Bloc) kullanarak verimli uygulama mimarisi kurdum",
                    "REST API entegrasyonları ve yerel veri depolama çözümleri uyguladım",
                ]
            }
        ],
        yetenekler: {
            frontend: ["Angular", "Next.js", "TypeScript", "Bootstrap", "Tailwind"],
            backend: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
            mobile: ["React Native", "Flutter"],
            tools: ["Git", "Postman", "Firebase"]
        },
        projeler: [
            {
                isim: "Modern Blog Platform",
                aciklama: "Angular ve Node.js ile geliştirilmiş full-stack blog platformu",
                teknolojiler: ["Angular", "Node.js", "Express", "MongoDB", "TailwindCSS"],
                detaylar: [
                    "CRUD operasyonları ile blog yazı yönetimi",
                    "Rol tabanlı yetkilendirme sistemi (Admin/Yazar/Okuyucu)",
                    "Markdown editör desteği ile zengin içerik oluşturma",
                    "Kategori ve etiket bazlı içerik organizasyonu",
                    "Responsive ve modern UI tasarımı"
                ]
            },
            {
                isim: "Event Management App",
                aciklama: "Full-stack etkinlik yönetim uygulaması. Backend için Node.js/Express, frontend için Flutter kullanıldı",
                teknolojiler: ["Flutter", "Node.js", "Express", "MongoDB", "Shadcn UI"],
                detaylar: [
                    "JWT tabanlı kullanıcı kimlik doğrulama sistemi",
                    "Etkinlik oluşturma, düzenleme ve katılımcı yönetimi",
                    "Gerçek zamanlı bildirimler ve etkinlik güncellemeleri",
                    "Gelişmiş filtreleme ve arama özellikleri",
                    "Responsive ve modern UI tasarımı"
                ]
            }
        ]
    }

    return (
        <div className="max-w-4xl mx-auto p-8">
        <div id="cv-content" className="bg-background p-8 rounded-lg shadow-lg">
            {/* Kişisel Bilgiler */}
            <div className="mb-8">
    <h1 className="text-4xl font-bold mb-2">{cv.kisiselBilgiler.isim}</h1>
    <p className="text-xl text-foreground/70 mb-4">{cv.kisiselBilgiler.unvan}</p>
    <div className="flex flex-wrap gap-4 text-foreground/70 mb-6">
        <div className="flex items-center gap-2">
            <FiMail className="w-4 h-4" />
            <span>{cv.kisiselBilgiler.email}</span>
        </div>
        <div className="flex items-center gap-2">
            <FiPhone className="w-4 h-4" />
            <span>{cv.kisiselBilgiler.telefon}</span>
        </div>
        <div className="flex items-center gap-2">
            <FiMapPin className="w-4 h-4" />
            <span>{cv.kisiselBilgiler.lokasyon}</span>
        </div>
        <div className="flex items-center gap-2">
            <FiLinkedin className="w-4 h-4" />
            <span>{cv.kisiselBilgiler.linkedin}</span>
        </div>
    </div>
    
    {/* Özet/Ön Yazı */}
    <div className="bg-primary/5 p-4 rounded-lg text-foreground/80 leading-relaxed">
        {cv.kisiselBilgiler.ozet}
    </div>
</div>

            {/* Deneyim */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <span className="w-8 h-1 bg-primary rounded-full"></span>
                    Deneyim
                </h2>
                {cv.deneyimler.map((deneyim, index) => (
                    <div key={index} className="mb-6 relative pl-4 border-l-2 border-primary/20">
                        <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
                        <h3 className="text-lg font-semibold">{deneyim.sirket}</h3>
                        <p className="text-foreground/70">{deneyim.pozisyon}</p>
                        <p className="text-sm text-foreground/50 mb-2">{deneyim.tarih}</p>
                        <ul className="list-disc list-inside space-y-1">
                            {deneyim.aciklama.map((item, i) => (
                                <li key={i} className="text-foreground/80">{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            {/* Projeler */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <span className="w-8 h-1 bg-primary rounded-full"></span>
                    Projeler
                </h2>
                {cv.projeler.map((proje, index) => (
                    <div key={index} className="mb-6 relative pl-4 border-l-2 border-primary/20">
                        <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
                        <h3 className="text-lg font-semibold">{proje.isim}</h3>
                        <p className="text-foreground/70 mb-2">{proje.aciklama}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                            {proje.teknolojiler.map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-2 py-1 bg-primary/5 rounded-full text-xs text-primary"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <ul className="list-disc list-inside space-y-1">
                            {proje.detaylar.map((detay, i) => (
                                <li key={i} className="text-foreground/80">{detay}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            {/* Yetenekler */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <span className="w-8 h-1 bg-primary rounded-full"></span>
                    Yetenekler
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {cv.yetenekler.frontend.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-primary/5 rounded-full text-sm text-primary"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {cv.yetenekler.backend.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-primary/5 rounded-full text-sm text-primary"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Mobile</h3>
                        <div className="flex flex-wrap gap-2">
                            {cv.yetenekler.mobile.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-primary/5 rounded-full text-sm text-primary"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Araçlar</h3>
                        <div className="flex flex-wrap gap-2">
                            {cv.yetenekler.tools.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-primary/5 rounded-full text-sm text-primary"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>

            {/* PDF İndirme Butonu */}
            <PDFDownloadButton />
        </div>
    )
}
