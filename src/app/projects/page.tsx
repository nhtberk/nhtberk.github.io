'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { motion } from 'framer-motion'
import ImageModal from '../components/ImageModal'
type Project = {
    title: string
    description: string
    image: string
    tags: string[]
    githubUrl?: string
    liveUrl?: string
    category: 'web' | 'mobile' | 'all'
}

const projects: Project[] = [
    {
        title: 'Modern Blog Platform',
        description: 'Angular ve Node.js ile geliştirilmiş full-stack blog platformu. CRUD operasyonları, rol tabanlı yetkilendirme sistemi ve markdown editör desteği içerir.',
        image: '/blog-platform.png',
        tags: ['Angular', 'Node.js', 'MongoDB', 'Tailwind CSS'],
        githubUrl: 'https://github.com/nhtberk/untitledBlog',
        liveUrl: 'https://untitled-blog-rho.vercel.app/',
        category: 'web'
    },
    {
        title: 'Event Management App',
        description: 'Full-stack etkinlik yönetim uygulaması. Backend için Node.js/Express, frontend için Flutter kullanıldı. JWT tabanlı kimlik doğrulama ve etkinlik görüntüleme sistemi.',
        image: '/event-app.png',
        tags: ['Flutter', 'Node.js', 'Express', 'MongoDB'],
        githubUrl: 'https://github.com/nhtberk/event_mobile',
        category: 'mobile'
    }
]



export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState<'all' | 'web' | 'mobile'>('all')
    const [selectedImage, setSelectedImage] = useState<{ url: string, title: string } | null>(null)

    const filteredProjects = projects.filter(project => {
        if (selectedCategory === 'all') return true
        return project.category === selectedCategory
    })

    return (
        <div className="max-w-5xl mx-auto px-4 py-24">
            <h1 className="text-4xl font-bold mb-8 text-foreground">Projelerim</h1>
            <div className="flex flex-wrap gap-4 mb-6">
                <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-4 py-2 rounded-full transition-colors ${selectedCategory === 'all'
                        ? 'bg-primary/5'
                        : 'hover:bg-primary/5'
                        }`}
                >
                    Tümü
                </button>
                <button
                    onClick={() => setSelectedCategory('web')}
                    className={`px-4 py-2 rounded-full transition-colors ${selectedCategory === 'web'
                        ? 'bg-primary/5'
                        : 'hover:bg-primary/5'
                        }`}
                >
                    Web
                </button>
                <button
                    onClick={() => setSelectedCategory('mobile')}
                    className={`px-4 py-2 rounded-full transition-colors ${selectedCategory === 'mobile'
                        ? 'bg-primary/5'
                        : 'hover:bg-primary/5'
                        }`}
                >
                    Mobil
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProjects.map((project) => (
                    <motion.div
                        key={project.title}
                        className="rounded-lg p-6 relative
                                 transition-all duration-300 ease-in-out"
                    >
                        <div
                            onClick={() => setSelectedImage({
                                url: project.image,
                                title: project.title
                            })}
                            className="cursor-pointer"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={1200}
                                height={800}
                                className="mb-4 rounded-lg w-full h-[300px] object-cover transition-transform hover:scale-[1.02]"
                                priority={true}
                            />
                        </div>
                        <h2 className="text-2xl font-bold mb-2 text-foreground">{project.title}</h2>
                        <p className="text-foreground mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span
                                    key={tag}
                                    className="px-2 py-1 bg-primary/5 rounded-full text-xs text-primary"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="mt-4">
                            {project.githubUrl && (
                                <Link
                                    href={project.githubUrl}
                                    target="_blank"
                                    className="text-foreground hover:text-primary transition-colors mr-4"
                                >
                                    <FiGithub className="inline-block mr-1" />
                                    GitHub
                                </Link>
                            )}
                            {project.liveUrl && (
                                <Link
                                    href={project.liveUrl}
                                    target="_blank"
                                    className="text-foreground hover:text-primary transition-colors"
                                >
                                    <FiExternalLink className="inline-block mr-1" />
                                    Canlı Demo
                                </Link>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
            <ImageModal
                isOpen={!!selectedImage}
                onClose={() => setSelectedImage(null)}
                imageUrl={selectedImage?.url || ''}
                title={selectedImage?.title || ''}
            />
        </div>
    )
} 