const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  // 1)Create transporter
  const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
          
      },
  });

  // 2)Define email options
  const mailOption = {
      from: process.env.EMAIL_USERNAME,
      to: options.email,
      subject: options.subject,
      text: options.message,
  };
  // 3)Actually sending mail
  await transporter.sendMail(mailOption);
};


module.exports = sendEmail;