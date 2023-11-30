import cors from "cors";
import dotenv from 'dotenv'
import express from "express";
import { Resend } from "resend";
import validation from './middleware/validationMiddleware.js'
import { emailSchema } from "./validations/emailSchema.js";

dotenv.config()

const app = express();
const resend = new Resend(process.env.RESEND_KEY);

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post("/", validation(emailSchema) ,async (req, res) => {
  const { nombre, apellido, asunto, mensaje } = req.body
  try {
    await resend.emails.send({
      from: `${nombre + ' ' + apellido} ${process.env.RESEND_EMAIL}`,
      to: [process.env.MY_EMAIL],
      subject: asunto,
      text: mensaje,
    });
    
    res.status(200).json({ status: 'OK', message: 'Email sent' });
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT} `);
});