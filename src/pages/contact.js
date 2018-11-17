import React from 'react'
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'
import { css } from 'react-emotion'

const pageTitleContainerClass = css`
  display: flex;
  justify-content: center;
`
const pageTitleClass = css`
  color: #cc5f5f;
  text-transform: uppercase;
  font-size: 5rem;
`
const contactWrapperClass = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  ${'' /* grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); */}
  color: #444;
  text-align: center;
  font-size: 3.5rem;
  grid-gap: 50px;
  height: 50vh;
  margin-top: 60px;
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

    <div className={contactWrapperClass}>
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
