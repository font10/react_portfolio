import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { Layout } from './components/index';

function App() {
  AOS.init()

  return (
    <div className='w-full h-screen'>    
      <ToastContainer />  
      <Layout />
    </div>
  )
}

export default App
