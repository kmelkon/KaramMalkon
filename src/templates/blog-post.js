import React from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import Metatags from '../components/metatags'
import { graphql } from 'gatsby'
import containerStyles from './blog-post.module.scss'

function BlogPost(props) {
  const post = props.data.markdownRemark
  const url = props.data.site.siteMetadata.siteUrl
  const { title, description } = post.frontmatter
  const thumbnail = post.frontmatter.image.childImageSharp.resize.src
  return (
    <Layout>
      <Metatags
        title={title}
        description={description}
        thumbnail={url + thumbnail}
        url={url}
        pathname={props.location.pathname}
      />
      <div>
        <h1>{title}</h1>
        <Img
          className={containerStyles.image}
          fluid={post.frontmatter.image.childImageSharp.fluid}
        />
        <div
          className={containerStyles.article}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        image {
          childImageSharp {
            resize(quality: 100) {
              src
            }
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
