const nodemailer = require('nodemailer');

const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL_SENDER_USER,
        pass:process.env.EMAIL_SENDER_PASSWORD
    }
});


module.exports=transporter