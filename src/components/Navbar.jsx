import { navLinks } from '../data.js'
import Logo from './Logo.jsx'

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__inner" aria-label="Main">
        <a href="#home" className="navbar__logo" aria-label="Home">
          <Logo />
        </a>
        <ul className="navbar__links">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
