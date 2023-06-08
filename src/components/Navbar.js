
import '../css/Navbar.css';
import { Link, NavLink } from 'react-router-dom';


//Link com react router
const Navbar = () => {
    return (
        <nav>
            {/*Esquema antigo da NavBar */}
            {/* <Link to="/">Home</Link>*/} {/*Ele faz o redirecionamento trocando o componente e nao a page */}
            {/* <Link to="/about">About</Link>  */}

            {/*NavLink */}
            <NavLink to="/" className={({ isActive }) => (isActive ? 'esta-ativo' : 'nao-esta-ativo')}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'esta-ativo' : 'nao-esta-ativo')}>About</NavLink>

        </nav>
    )
}

export default Navbar