import React from 'react'
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'
import { css } from 'react-emotion'

const pageTitleContainerClass = css`
    display: flex;
    justify-content: center;
`;
const pageTitleClass = css`
  color: #cc5f5f;
  text-transform: uppercase;
  font-size: 5rem;
`

export default ({ data }) => (
  <Layout>
    <div className={pageTitleContainerClass} >
      <h1 className={pageTitleClass}>Contact</h1>
    </div>
    <div>This is the contact page, is that okay mate?</div>
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
