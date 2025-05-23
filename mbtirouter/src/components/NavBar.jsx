import { NavLink } from "react-router"

function NavBar() {
  return (
    <div>
      <nav className='inline menu-bar'>
        <NavLink to={'/'} >Home</NavLink>
        <NavLink to={'/mbti'} >MBTI</NavLink>
      </nav>
    </div>
  )
}

export default NavBar