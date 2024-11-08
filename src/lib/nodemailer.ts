import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  },
});

export async function verifyEmailConnection() {
  try {
    await transporter.verify();
    console.log('Email service connected');
    return true;
  } catch (error) {
    console.error('Email service error:', error);
    return false;
  }
} 