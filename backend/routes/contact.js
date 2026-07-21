const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const nodemailer = require('nodemailer');

// POST a new message
router.post('/', async (req, res) => {
  const { name, email, content } = req.body;
  const message = new Message({ name, email, content });

  try {
    const newMessage = await message.save();

    // Send Email if configuration exists
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'ba.raja499@gmail.com',
        subject: `New Portfolio Message from ${name}`,
        text: `You have received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\nMessage:\n${content}`
      };

      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully to ba.raja499@gmail.com');
    } else {
      console.warn("Nodemailer: EMAIL_USER and EMAIL_PASS environment variables are not set. Message saved to DB only.");
    }

    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error("Error in contact route:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
