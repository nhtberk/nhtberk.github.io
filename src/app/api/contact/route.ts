
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)
export SendEmail() = async{body}=>{
    const response = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>', // Resend'de doğrulanmış domain
            to: 'berkoz5555@gmail.com', // Sizin mail adresiniz
            replyTo: body.email,
            subject: Portfolio İletişim: ${body.subject},
            html: `
                <div>
                    <h2>Yeni İletişim Formu Mesajı</h2>
                    <p><strong>İsim:</strong> ${body.name}</p>
                    <p><strong>Email:</strong> ${body.email}</p>
                    <p><strong>Konu:</strong> ${body.subject}</p>
                    <p><strong>Mesaj:</strong></p>
                    <p>${body.message}</p>
                </div>
            `
        })
}
