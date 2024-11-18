'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FiX } from 'react-icons/fi'

type ImageModalProps = {
    isOpen: boolean
    onClose: () => void
    imageUrl: string
    title: string
}

export default function ImageModal({ isOpen, onClose, imageUrl, title }: ImageModalProps) {
    if (!isOpen) return null

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-8"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="relative w-[90vw] h-[85vh] bg-background rounded-lg overflow-hidden"
                    onClick={e => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
                    >
                        <FiX className="w-6 h-6" />
                    </button>
                    
                    <div className="relative w-full h-[calc(100%-60px)]">
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            className="object-contain p-4"
                            sizes="90vw"
                            priority
                        />
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-sm">
                        <h3 className="text-xl font-semibold dark:text-white">{title}</h3>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
} 