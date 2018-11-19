import React from 'react'
import Layout from '../components/layout'
import { css } from 'react-emotion'
import { Link } from 'gatsby'
import './projects.scss'

const projectsWrapperClass = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const projectBoxClass = css`
  text-decoration: none;
  border: 1px solid #cc5f5f;
  color: #201a23;
  padding: 10px;
  margin-bottom: 50px;
  width: 75%;
  max-width: 75%;
  transition: box-shadow 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
  &:hover {
    box-shadow: 5px 6px 0px 1px rgba(204, 95, 95, 1);
  }
`
const projectHeaderClass = css`
  text-align: center;
`
const projectLinksWrapperClass = css`
  text-align: center;
`


export default ({ data }) => (
  <Layout>
    <div className="pageTitleContainerClass">
      <h1 className="pageTitleClass">Projects</h1>
    </div>
    <div className={projectsWrapperClass}>
      <div className={projectBoxClass}>
        <h3 className={projectHeaderClass}>This website</h3>
        <p>
          I wanted to use Gatsby as a way to get my feet wet in React and it's so much fun.
        </p>
        <div className="projectLinksWrapperClass">
          <a
            href="https://github.com/kmelkon/KaramMalkon"
            className="projectLinkClass"
          >
            Project on Github
          </a>
          <Link to="/" className="projectLinkClass">
            Uhm.. Homepage
          </Link>
        </div>
      </div>
      <div className={projectBoxClass}>
        <h3 className={projectHeaderClass}>Placeholder</h3>
        <p>Placeholder description.</p>
        <div className="projectLinksWrapperClass">
          <Link to="/" className="projectLinkClass">
            Link to github
          </Link>
          <Link to="/" className="projectLinkClass">
            Link to this website
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)
