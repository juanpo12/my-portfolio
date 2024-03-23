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
              user: 'juanjosediazarmada@outlook.com',
              pass: PASSWORD,
            },
          });
          

          const info = await transporter.sendMail({
            from: `"${name}" <juanjosediazarmada@outlook.com>`, 
            to: 'juanjosediazarmada@outlook.com', 
            subject: "Portfolio Contact Form", 
            text: message + '\n\n' + email, 
          });
          
        return NextResponse.json({ message: 'Email enviado correctamente.'} );
        
    } catch (error : any) {
        console.log(error)
        return NextResponse.json({ error: error.message });
    }
}
