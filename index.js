const nodeMailer = require('nodemailer')

let transportmail = nodeMailer.createTransport({
    service:'gmail',
    auth:{
        user:'kumarangpt2009@gmail.com',
        pass:'nyot ugls drxb rutc'
    }
})

let mailContent = {
    from:"kumarangpt2009@gmail.com",
    to:'lahirukumara1408@gmail.com',
    subject:'Test Mail',
    text:"This is from coding practise"
}

transportmail.sendMail(mailContent,function(err,val){
    if(err){
        console.log(err)
    }else{
        console.log(val.response,"sent Mail...")
    }
})