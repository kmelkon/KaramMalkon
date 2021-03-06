import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import containerStyles from './projects.module.scss'
import { FiGithub } from 'react-icons/fi'

export default () => (
  <Layout>
    <div className={containerStyles.titleContainer}>
      <h1 className={containerStyles.title}>Projects</h1>
    </div>
    <div className={containerStyles.projects}>
      <div className={containerStyles.project}>
        <h3 className={containerStyles.projectTitle}>React Clock</h3>
        <p>
          A simple react clock that displays the time in both 24 and 12 hour
          formats.
        </p>
        <div className={containerStyles.linkWrapper}>
          <a
            href="https://github.com/kmelkon/react-clock"
            className={containerStyles.link}
          >
            <FiGithub />
          </a>
          <a
            href="https://admiring-cori-0b0a58.netlify.com/"
            className={containerStyles.link}
          >
            Go to project
          </a>
        </div>
      </div>

      <div className={containerStyles.project}>
        <h3 className={containerStyles.projectTitle}>React Clicker</h3>
        <p>A simple react clicker/incremental game for fun and profit.</p>
        <div className={containerStyles.linkWrapper}>
          <a
            href="https://github.com/kmelkon/react-clicker"
            className={containerStyles.link}
          >
            <FiGithub />
          </a>
          <a
            href="https://romantic-knuth-651f53.netlify.com/"
            className={containerStyles.link}
          >
            Go to project
          </a>
        </div>
      </div>

      <div className={containerStyles.project}>
        <h3 className={containerStyles.projectTitle}>
          Karam Malkon's Portfolio/Blog
        </h3>
        <p>A personal portfolio/blog built using GatsbyJS.</p>
        <div className={containerStyles.linkWrapper}>
          <a
            href="https://github.com/kmelkon/KaramMalkon"
            className={containerStyles.link}
          >
            <FiGithub />
          </a>
          <Link to="/" className={containerStyles.link}>
            Go to project
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)
