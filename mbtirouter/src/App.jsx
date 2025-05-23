import { NavLink, Outlet } from 'react-router'
import './App.css'
import NavBar from './components/NavBar'

function App() {

  return (
    <div className='h-lvh'>
      <h1 className='test'>웰컴</h1>
      <NavBar />
      <hr />
      <Outlet />
      <hr />
    </div>
  )
}

export default App
