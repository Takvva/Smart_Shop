import nodemailer from "nodemailer"

const transport = nodemailer.createTransport({
    service: "Gmail",
    auth:{
        user: "takwahammadi8@gmail.com",
        pass: "T20112002*ha"
    }
})

const confirmationEmail = (mail)=> {
    transport.sendMail({
        from: "takwahammadi8@gmail.com",
        to: mail,
        subject:"Récupérer votre compte",
        text: ` Bonjour
        <p>Pour réinitialiser votre mot de passe , veuiller cliquer sur ce lien </p>`


    })
    
}
export default confirmationEmail