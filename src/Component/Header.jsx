import React from 'react'
import { Link } from 'react-router-dom'
export default function Header(params) {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <h1 className="subtitle is-5 mitr">TDC-Space</h1>
        </Link>
        <div
          className="navbar-burger burger"
          data-target="navbarExampleTransparentExample"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div
        id="navbarExampleTransparentExample"
        className="navbar-menu mitrlight"
      >
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            หน้าแรก
          </Link>
          <Link className="navbar-item" to="/about">
            เกี่ยวกับเรา
          </Link>
          <Link className="navbar-item" to="/category">
            หมวดหมู่
          </Link>
        </div>
      </div>
    </nav>
  )
}
