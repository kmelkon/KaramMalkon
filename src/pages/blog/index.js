import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import containerStyles from './index.module.scss'
import { css } from 'react-emotion'

const pageTitleContainerClass = css`
  display: flex;
  justify-content: center;
`

const IndexPage = props => {
  const postList = props.data.allMarkdownRemark
  return (
    <Layout>
      <div className={pageTitleContainerClass}>
        <h1 className="pageTitleClass">Blog</h1>
      </div>
      {postList.edges.map(({ node }, i) => (
        <Link to={node.fields.slug} className={containerStyles.link}>
          <div className="post-list">
            <h1 className={containerStyles.title}>{node.frontmatter.title}</h1>
            <span className={containerStyles.date}>
              {node.frontmatter.date}
            </span>
            <p className={containerStyles.excerpt}>{node.excerpt}</p>
          </div>
        </Link>
      ))}
    </Layout>
  )
}

export default IndexPage

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD MMM YYYY")
            title
          }
        }
      }
    }
  }
`
