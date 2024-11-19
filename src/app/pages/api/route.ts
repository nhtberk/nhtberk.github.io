import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Form validasyonu
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Tüm alanlar zorunludur.' });
    }

    // Resend API ile email gönderimi
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Resend'de doğrulanmış domain
      to: 'berkoz5555@gmail.com', // Sizin mail adresiniz
      replyTo: email, // Kullanıcı e-postasına yanıt
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
      `,
    });

    return res.status(200).json({
      message: 'Email başarıyla gönderildi.',
      data,
    });
  } catch (error) {
    console.error('Email gönderme hatası:', error);

    return res.status(500).json({
      error: 'Email gönderilirken bir hata oluştu.',
    });
  }
}
