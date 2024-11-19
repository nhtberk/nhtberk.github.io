import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function POST(request: Request) {
    console.log(1);
    
    try {
        const body = await request.json()
        const { name, email, subject, message } = body

        // Form validasyonu
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Tüm alanlar zorunludur' },
                { status: 400 }
            )
        }

        const data = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>', // Resend'de doğrulanmış domain
            to: 'berkoz5555@gmail.com', // Sizin mail adresiniz
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

        return NextResponse.json(
            { message: 'Email başarıyla gönderildi', data },
            { status: 200 }
        )

    } catch (error) {
        console.error('Email gönderme hatası:', error)
        return NextResponse.json(
            { error: 'Email gönderilirken bir hata oluştu' },
            { status: 500 }
        )
    }
}