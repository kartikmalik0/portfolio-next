import { NextRequest } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend("re_3u6gNSmP_AihzwZfJ7hRpAP7PwsXhEp8D");

export async function POST(req:NextRequest){
   const body = await req.json();

   const htmlBody = `
            <p>You have received a new message from the portfolio contact form:</p>
            <p><strong>Name:</strong> ${body?.name}</p>
            <p><strong>Email:</strong> ${body?.email}</p>
            <p><strong>Message:</strong> ${body?.message}</p>
        `;
    const {data , error} = await resend.emails.send({
        from:"Portfolio <onboarding@resend.dev>",
        to:["kartik20044@gmail.com"],
        subject:'Contact Mail From Portfolio',
        html:htmlBody
    })
    if(error){
        return Response.json(error)
    }
    return Response.json({message:"Email sent successfully"})
}