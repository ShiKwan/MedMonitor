const nodemailer = require('nodemailer');

const config = require('./config');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    secure: false,
    auth: {
        user: config.USER,
        pass: config.PASS
    },
    tls: {
        rejectUnauthorized: false
    }
});

const send = ({ email, name, text }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`
  const message = {
    from,
    to: 'sk.tan97@gmail.com',
    subject: `New message from ${from} at creating-contact-forms-with-nodemailer-and-react`,
    text,
    replyTo: from
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}

const sendToPatient = ({email, name, text, subject}) => {
  const to = name && email ? `${name} <${email}>` : `${name || email}`
  const message = {
    from : 'bscwruproject2@gmail.com',
    to,
    subject: subject,
    text,
    replyTo : 'bscwruproject2@gmail.com'
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}

module.exports = {
    send : send,
    sendToPatient : sendToPatient
}