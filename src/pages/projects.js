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
    <div className="projectsTitleContainerClass">
      <h1 className="projectsTitleClass">Projects</h1>
    </div>
    <div className={projectsWrapperClass}>
      <div className={projectBoxClass}>
        <h3 className={projectHeaderClass}>Karam Malkon's Portfolio/Blog</h3>
        <p>
          A personal portfolio/blog built using GatsbyJS.
        </p>
        <div className="projectLinksWrapperClass">
          <a
            href="https://github.com/kmelkon/KaramMalkon"
            className="projectLinkClass"
          >
            Project on Github
          </a>
          <Link to="/" className="projectLinkClass">
            Go to project
          </Link>
        </div>
      </div>
      <div className={projectBoxClass}>
        <h3 className={projectHeaderClass}>React Clicker</h3>
        <p>A simple react clicker/incremental game.</p>
        <div className="projectLinksWrapperClass">
          <a href="https://github.com/kmelkon/react-clicker" className="projectLinkClass">
            Project on Github
          </a>
          <a href="https://romantic-knuth-651f53.netlify.com/" className="projectLinkClass">
            Go to project
          </a>
        </div>
      </div>
    </div>
  </Layout>
)
