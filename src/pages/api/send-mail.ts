import { NextApiRequest, NextApiResponse } from 'next';
import { createTransport, SendMailOptions } from 'nodemailer';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const mailOptions: SendMailOptions = {
    from: `${req.body.name} <${req.body.email}>`,
    to: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
    subject: req.body.name,
    text: req.body.message,
    html: `<div>${req.body.email} - treść wiadomości:</div><p>${req.body.message}</p>`,
  };

  const transporter = createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
      pass: process.env.NEXT_PUBLIC_NODEMAILER_PW,
    },
  });

  if (req.method === 'POST') {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        res.status(404).json({
          error: `Connection refused at ${err.cause}`,
        });
      } else {
        res.status(250).json({
          success: `Message delivered to ${info.accepted}`,
        });
      }
    });
  }
}
