import { Link } from "gatsby"
import React from "react"

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-sky-300 to-black text-white px-2">
      <nav className="container flex flex-row items-baseline justify-between py-6">
        <Link to="/" className="text-xl font-medium text-black">
          Blog
        </Link>
        <div className="flex flex-row items-baseline justify-end">
          <Link className="font-medium " to="/about">
            About
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar