import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tüm alanlar zorunludur' },
        { status: 400 }
      )
    }

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'tahinkreb@gmail.com',
      replyTo: email,
      subject: `Portfolio İletişim: ${subject}`,
      html: `
        <div>
          <h2>Yeni İletişim Formu Mesajı</h2>
          <p><strong>İsim:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Konu:</strong> ${subject}</p>
          <p><strong>Mesaj:</strong></p>
          <p>${message}</p>
        </div>
      `
    })

    return NextResponse.json(data)
  } catch (error) {
    console.error('Email gönderme hatası:', error)
    return NextResponse.json(
      { error: 'Email gönderilirken bir hata oluştu' },
      { status: 500 }
    )
  }
}
