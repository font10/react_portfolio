import './App.css'
import { Layout } from './components/Layout/Layout'
import background from './assets/images/background_portfolio.jpg'

function App() {

  return (
    <div className='w-full h-screen'>
      <img 
        className='absolute bg-repeat' 
        src={background}
        alt='background' 
      />
      <Layout />
    </div>
  )
}

export default App
