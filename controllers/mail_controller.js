var nodemailer = require('nodemailer');
//var Mailgen = require('mailgen');

module.exports.sendMailToUser = function(user, event) {
    let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
            user: 'greenrgreenr@gmail.com',
            pass: 'ninja_droid123'
        }
    });
    let mailOptions = {
        from: event.username, 
        to: user.username, 
        subject: event.name, 
        html: '<b>'+ event.description +'</b>', 
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });  
};