import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 py-4 fixed w-full bg-white shadow z-50">
      <h1 className="text-xl font-bold">mirror</h1>
      <nav className="space-x-6 text-sm">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/portfolio" className="hover:underline">Portfolio</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>
    </header>
  )
}
