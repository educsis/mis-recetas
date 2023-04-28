import { Link } from 'react-router-dom'

// styles
import './Navbar.css'
import SearchBar from './SearchBar'

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Mis Recetas</h1>
        </Link>
        <SearchBar />
        <Link to="/create">Crear Receta</Link>
      </nav>
    </div>
  )
}
