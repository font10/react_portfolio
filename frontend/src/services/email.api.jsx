import axios from 'axios'
 
export const sendEmailService = async(formInputs) => {
  const res = await axios.post('http://localhost:5000', formInputs)
  return res
}