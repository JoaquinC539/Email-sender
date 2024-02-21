const transporter=require('./mailer.js');
const path=require('path')
const fs = require('fs');
const notificationTemplates=require('./utils/notificationTemplate.js')
const get=(req,res)=>{
    const alerta='true'===req.query.alerta;
    const alertTitle=req.query.alertTitle;
    const alertMessage=req.query.alertMessage;
    // const filePath=path.join(__dirname,"/static","/views","contact.html")
    // res.sendFile(filePath);
    res.render('contact',{ alerta, alertTitle, alertMessage });
}
const post=(req,res)=>{
    const contactName=req.body["name"]
    const contactEmail=req.body["email"]
    const contactMessage=req.body["message"];    
    let htmlBody=notificationTemplates('newContact.html')
    .replace('{{contactName}}', contactName)
    .replace('{{contactEmail}}', contactEmail)
    .replace('{{contactMessage}}', contactMessage);
    const mailOptions={
        from:process.env.EMAIL_SENDER_USER,
        to:process.env.EMAIL_SENDER_USER,
        subject:"New Contact",
        html: htmlBody
    }
    
    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.error('Error al enviar el correo electrónico:', error);
            res.send(error)

        }else{
            const params={
                "correcoEnviado":true
            }
            const urlParams=new URLSearchParams(params)
            res.redirect('/contact?'+urlParams.toString())
        }
    });
    const params={
        "alerta":true,
        "alertTitle":"Correo enviado",
        "alertMessage":"Correo enviado exitosamente para su contacto"
    }
    const urlParams=new URLSearchParams(params)
    res.redirect('/contact?'+urlParams.toString())    
    return;   
}

module.exports={get,post}