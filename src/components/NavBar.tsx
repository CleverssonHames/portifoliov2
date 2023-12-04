import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='m-0'>
        <ul className="flex items-center justify-around p-5 text-3xl text-white">
            <li className='duration-700'><NavLink to="/">Home</NavLink></li>
            <li className='duration-700'><NavLink to="/About">Sobre</NavLink></li>
            <li className='duration-700'><NavLink to="/Projects">Projetos</NavLink></li>
        </ul>
    </nav>
  )
}

export default NavBar;