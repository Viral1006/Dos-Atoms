import express from 'express';
import bodyparser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
// const { info } = require('autoprefixer');

dotenv.config(); 

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

const transporter = nodemailer.createTransport({
     service : 'gmail',
    // host: 'smtp.protonmail.ch',
    // port: 465,
    // secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.get('/', (req, res) => {
    res.send('Server is running'); // Send a simple response for GET requests to root
});

app.post('/send', (req,res) => {
    const { fullname, email, inquiry, customInquiry } = req.body;

    const mailOptions = {
        from : process.env.EMAIL_USER,
        to : process.env.EMAIL_RECEPIENT,
        subject : 'New Inquiry (Dos-Atoms)',
        text :  `Name: ${fullname}\nEmail: ${email}\nInquiry: ${inquiry}\nCustom Inquiry: ${customInquiry}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.error('Error sending email:', error);
            return res.status(500).send(error.toString());
        }
        console.log('Email sent:', info.response);
        res.send('E-mail sent:' + info.response);
    });
});

app.listen(port, () =>  {
    console.log(`Server running on port ${port} `);
});