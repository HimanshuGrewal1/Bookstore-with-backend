import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Foooter'
import { AuthProvide } from './context/Authcontext'
function App() {
  

  return (
    <>
    <AuthProvide>
    <Navbar/>
    <main className='min-h-screen max-w-screen-2xl mx-auto px-4  font-primary' >
      <Outlet/>
      </main>
      <Footer/>
    </AuthProvide>
   

    </>
  )
}

export default App
