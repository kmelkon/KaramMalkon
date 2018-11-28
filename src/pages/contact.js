import React from 'react'
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'
import containerStyles from './contact.module.scss'
import { FiGithub, FiTwitter, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
import { FaDev } from "react-icons/fa";


export default ({ data }) => (
  <Layout>
    <div className={containerStyles.titleWrapper}>
      <h1 className={containerStyles.title} >Contact</h1>
    </div>

    <div className={containerStyles.wrapper} >
      <div>
        <a href="https://github.com/kmelkon" className={containerStyles.link}><FiGithub /></a>
      </div>
      <div>
        <a href="https://twitter.com/kmelkon" className={containerStyles.link}><FiTwitter /></a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/kmelkon/" className={containerStyles.link}><FiLinkedin /></a>
      </div>
      <div>
        <a href="https://dev.to/kmelkon" className={containerStyles.link}><FaDev /></a>
      </div>
      <div>
        <a href="https://www.instagram.com/kmelkon/" className={containerStyles.link}><FiInstagram /></a>
      </div>
      <div>
        <a href="mailto:kmelkon@gmail.com" className={containerStyles.link}><FiMail /></a>
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
