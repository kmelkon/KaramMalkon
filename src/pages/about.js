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

export default ({ data }) => (
  <Layout>
    <div className={pageTitleContainerClass}>
      <h1 className={pageTitleClass}>About</h1>
    </div>
     {' '}
    <div>
      <p>
        I’m a frontend developer currently living in Stockholm, Sweden.
        My favorite technologies right now are React, GraphQL and Gatsby. I also
        have worked with Ruby on Rails, AngularJS, PHP, CSS, SASS and LESS.{' '}
      </p>
      <p>
        When I'm not working, I like to unleash my inner kid by playing video
        games (mostly fantasy card games), taking candid pictures of people in
        the streets (AKA street photography), experiencing different kinds of
        food, reading and spending time with my girlfriend.
      </p>
      <p>
        If you would like to talk about any of the subjects I mentioned (my
        girlfriend excluded) or just have a curious question, feel free to say
        hello and share your stories with me!
      </p>
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
