import React from 'react'
import { Link } from 'gatsby'
import { css } from 'react-emotion'
import './header.scss'


const headerTitleClass = css`
  color: #fff;
  background-color: #cc5f5f;
  font-size: 1.25rem;
  margin: 0.5em 0;
  padding: 10px;
  text-decoration: none;
`
const headerNavClass = css`
  color: #201a23;
  display: flex;
  list-style: none;
  margin-top: 15px;
`
const headerContainerClass = css`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 100%;
  padding: 1.45rem 1.0875rem;
`
const headerNavItemClass = css`
  margin-left: 20px;
`
const headerNavLinkClass = css`
  text-decoration: none;
  border: 1px solid #cc5f5f;
  color: #201a23;
  padding: 10px;
  transition: box-shadow 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
  &:hover {
    box-shadow: 5px 6px 0px 1px rgba(204, 95, 95, 1);
  }
`

const Header = ({ siteTitle }) => (
  <div
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div className={headerContainerClass}>
      <h1>
        <Link to="/" className={headerTitleClass}>
          {siteTitle}
        </Link>
      </h1>
      <ul className="header-nav">
        <li className="header-nav-item">
          <Link to="/about/" className={headerNavLinkClass}>
            About
          </Link>
        </li>
        <li className="header-nav-item">
          <Link to="/projects" className={headerNavLinkClass}>
            Projects
          </Link>
        </li>
        <li className="header-nav-item">
          <Link to="/" className={headerNavLinkClass}>
            Blog
          </Link>
        </li>
        <li className="header-nav-item">
          <Link to="/contact/" className={headerNavLinkClass}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
