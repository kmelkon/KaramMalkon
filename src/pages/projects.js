import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import containerStyles from './projects.module.scss'

export default ({ data }) => (
  <Layout>
    <div className={containerStyles.titleContainer}>
      <h1 className={containerStyles.title}>Projects</h1>
    </div>
    <div className={containerStyles.projects}>
      <div className={containerStyles.project}>
        <h3 className={containerStyles.projectTitle}>Karam Malkon's Portfolio/Blog</h3>
        <p>
          A personal portfolio/blog built using GatsbyJS.
        </p>
        <div className={containerStyles.linkWrapper}>
          <a
            href="https://github.com/kmelkon/KaramMalkon"
            className={containerStyles.link}
          >
            Project on Github
          </a>
          <Link to="/" className={containerStyles.link}>
            Go to project
          </Link>
        </div>
      </div>
      <div className={containerStyles.project}>
        <h3 className={containerStyles.projectTitle}>React Clicker</h3>
        <p>A simple react clicker/incremental game.</p>
        <div className={containerStyles.linkWrapper}>
          <a href="https://github.com/kmelkon/react-clicker" className={containerStyles.link}>
            Project on Github
          </a>
          <a href="https://romantic-knuth-651f53.netlify.com/" className={containerStyles.link}>
            Go to project
          </a>
        </div>
      </div>
    </div>
  </Layout>
)
