'use client'

import { useState } from 'react'
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi'
import {SendEmail} from './../api/contact/route'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      const response =SendEmail(JSON.stringify(formData)),

      if (!response.ok) {
        throw new Error('Bir hata oluştu')
      }

      setSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (_err) {
      setError('Mesajınız gönderilemedi. Lütfen daha sonra tekrar deneyin.')
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="max-w-5xl mx-auto px-4 py-24">
      <div className="grid md:grid-cols-2 gap-12">
        {/* İletişim Bilgileri */}
        <div>
          <h1 className="text-4xl font-bold mb-6">İletişime Geçin</h1>
          <p className="text-lg text-foreground/80 mb-8">
            Proje fikirleriniz, iş birliği teklifleriniz veya herhangi bir sorunuz için 
            benimle iletişime geçebilirsiniz.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-primary/10">
                <FiMail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-foreground/70">tahinkreb@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-primary/10">
                <FiMapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium">Adres</h3>
                <p className="text-foreground/70">Antalya, Türkiye</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-primary/10">
                <FiSend className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium">Telefon</h3>
                <p className="text-foreground/70">+90 543 506 99 00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Adınız</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Adınız"
              required
              className="p-3 rounded-md border border-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Email"
              required
              className="p-3 rounded-md border border-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="subject">Konu</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder="Konu"
              required
              className="p-3 rounded-md border border-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message">Mesaj</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Mesajınız"
              required
              className="p-3 rounded-md border border-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              rows={4}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 rounded-md bg-primary text-background hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary flex items-center justify-center"
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-background mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C9.535 0 8.227 0.672 7.462 1.402A9.915 9.915 0 016.649 3.102a10.075 10.075 0 01-1.523 2.175 8.196 8.196 0 002.370 2.37l.004.004c.968.968 2.127 1.777 3.465 2.39a6.677 6.677 0 01-1.857 1.13l-1.497 1.496a1.5 1.5 0 01-2.122-2.12l1.497-1.497a4.125 4.125 0 002.393-3.465 6.675 6.675 0 01-1.244-5.44l-1.51-1.51z"
                ></path>
              </svg>
            ) : (
              'Mesajınızı Gönder'
            )}
          </button>
        </form>
      </div>
    </div>
  )
} 
