import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  // secure: true,
  // host: 'smtp.gmail.com',
  // port: 465,
  auth: {
    user: "skrazi9913@gmail.com",
    password: "ezsfxdnnuwnxhqoy"
  }
})

function sendMail(to, subject, message) {
  transporter.sendMail({
    to,
    subject,
    html: message,
  },
    function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    })
}

sendMail("tempmail9913@gmail.com", "testing nodemailer", "I am testing")