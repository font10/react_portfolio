import './App.css'
import { Layout } from './components/index'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className='w-full h-screen'>    
      <ToastContainer />  
      <Layout />
    </div>
  )
}

export default App
