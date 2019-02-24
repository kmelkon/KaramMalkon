import React from 'react'
import Layout from '../components/layout'
import Image from '../components/image'
import styles from './photography.module.scss'

export default ({ data }) => (
  <Layout>
    <h1 className={styles.photos}>Photos</h1>
  </Layout>
)
