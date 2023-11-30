import * as yup from 'yup'

const emailSchema = yup.object().shape({
  nombre: yup
    .string()
    .min(4, 'Nombre necesita un mínimo de 4 caracteres')
    .trim()
    .required("Nombre es requerido"),
  apellido: yup
    .string()    
    .min(4, 'Apellido necesita un mínimo de 4 caracteres')
    .trim()
    .required('Apellido es requerido'),
  asunto: yup
    .string()
    .min(4, 'Asunto necesita un mínimo de 4 caracteres')
    .trim()
    .required('Asunto es requerido'),
  mensaje: yup
    .string()
    .min(4, 'Mensaje necesita un mínimo de 4 caracteres')
    .trim()
    .required('Mensaje es requerido'),
})

export {
  emailSchema
}