import React from 'react'
import { Link } from 'gatsby'
import { css } from 'react-emotion'
import Layout from '../components/layout'

const pageTitleContainerClass = css`
  display: flex;
  justify-content: center;
`
const center = css`
  text-align: center;
`;
const pageTitleClass = css`
  color: #cc5f5f;
  text-transform: uppercase;
  font-size: 10rem;
  text-align: center;
`

const IndexPage = () => (
  <Layout>
      <h2 className={center} >Hey there, my name is</h2>
      <h1 className={pageTitleClass}>Karam</h1>

    <h2 className={center} >A frontend developer who enjoys writing code</h2>
    
    <h2 className={center} >Especially Javascript and CSS</h2>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }} />
  </Layout>
)

export default IndexPage
