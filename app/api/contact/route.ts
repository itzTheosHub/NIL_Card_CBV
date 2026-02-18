import { Resend } from "resend"
import {NextResponse} from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)


export async function POST(request: Request)
{
    const { email, senderEmail, subject, message} = await request.json()

    try {
        await resend.emails.send({
        from: 'onboarding@resend.dev',
        replyTo: senderEmail,
        to: email,
        subject: subject,
        html: message 
        });
        return NextResponse.json({success: true})
    }
    catch(error)
    {
        return NextResponse.json({error: "Failed to send"}, {status: 500}) 
    }

    


}

