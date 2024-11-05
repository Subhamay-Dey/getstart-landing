import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, paymentId } = req.body;

  if (!email || !paymentId) {
    return res.status(400).json({ message: 'Email and paymentId are required' });
  }
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const zipFilePath = path.join(process.cwd(), 'public', 'files', 'GetStartKit.zip');

  const mailOptions = {
    from: '"Getstart" subhraneeljobs@gmail.com',
    to: email,
    subject: 'Your SaaS Kit',
    text: 'Thank you for your purchase! Find your SaaS kit attached below.',
    attachments: [
      {
        filename: 'GetStartKit.zip',
        path: zipFilePath,
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Zip file sent successfully' });
  } catch (error) {
    console.error('Error sending email', error);
    res.status(500).json({ message: 'Error sending email' });
  }
}
