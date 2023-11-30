import axios from 'axios'
 
export const sendEmailService = async(formInputs) => {
  const res = await axios.post('https://react-portfolio-api-f06w.onrender.com/', formInputs)
  return res
}