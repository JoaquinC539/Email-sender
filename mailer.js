const nodemailer = require('nodemailer');

const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL_SENDER_USER,
        pass:process.env.EMAIL_SENDER_PASSWORD
    }
});

let mailOPtions={
    from:process.env.EMAIL_SENDER_USER,
    to:process.env.EMAIL_SENDER_USER,
    subject:"Sending an email from nodejs using my personal google account",
    text:"I am successful test"
}
module.exports=transporter