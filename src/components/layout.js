import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { css, injectGlobal } from 'react-emotion'
import * as fonts from "../fonts"


import Header from './header'
import './layout.css'


injectGlobal`
  @font-face {
    font-family: 'Jaapokki subtract';
    font-style: normal;
    font-weight: normal;
    src: local('Jaapokki subtract'), url('${fonts.JaapokkiSubtract}') format('ttf');
  }
  body {
    font-family: 'Jaapokki subtract';
    font-size: 20px;
  }
`

injectGlobal`
  body {
    background-color: #FBFBFB;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
