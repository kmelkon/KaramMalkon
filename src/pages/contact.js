import React from 'react'
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'
import { css } from 'react-emotion'
import './contact.scss'

const pageTitleContainerClass = css`
  display: flex;
  justify-content: center;
`
const pageTitleClass = css`
  color: #cc5f5f;
  text-transform: uppercase;
  font-size: 5rem;
`

const contactLinksClass = css`
  text-decoration: none;
  color: inherit;
`

export default ({ data }) => (
  <Layout>
    <div className={pageTitleContainerClass}>
      <h1 className={pageTitleClass}>Contact</h1>
    </div>

    <div className="contactWrapperClass">
      <div>
        <a href="https://github.com/kmelkon" className={contactLinksClass}>GitHub</a>
      </div>
      <div>
        <a href="https://twitter.com/kmelkon" className={contactLinksClass}>Twitter</a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/kmelkon/" className={contactLinksClass}>Linkedin</a>
      </div>
      <div>
        <a href="https://dev.to/kmelkon" className={contactLinksClass}>DEV</a>
      </div>
      <div>
        <a href="https://www.instagram.com/kmelkon/" className={contactLinksClass}>Instagram</a>
      </div>
      <div>
        <a href="mailto:kmelkon@gmail.com" className={contactLinksClass}>Email</a>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
