import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


export const POST = async (req: NextRequest) => {
    try {
        const { name, email, message } = await req.json();
        const PASSWORD = process.env.PASSWORD
    
        if (!name || !email || !message) {
            throw Error ('Todos los campos son obligatorios')
          }
        
          const transporter = nodemailer.createTransport({
            host: 'smtp-mail.outlook.com',
            port: 587,
            secure: false,
            auth: {
              user: 'juanjoc2000@hotmail.com',
              pass: PASSWORD,
            },
          });
          

          const info = await transporter.sendMail({
            from: `"${name}" <juanjoc2000@hotmail.com>`, 
            to: 'juanjoc2000@hotmail.com', 
            subject: "Portfolio Contact Form", 
            text: message + '\n\n' + email, 
          });
          
          console.log(info);
        return NextResponse.json({ message: 'Email enviado correctamente.' });
        
    } catch (error : any) {
        return NextResponse.json({ error: error.message });
    }



}