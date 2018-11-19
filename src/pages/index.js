import React from 'react'
import { Link } from 'gatsby'
import { cx, css } from 'react-emotion'
import Layout from '../components/layout'
import SplitText from 'react-pose-text'
import facepaint from 'facepaint'
import './index.scss'


const pageTitleContainerClass = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`
const center = css`
  text-align: center;
`
const pageTitleClass = css`
  color: #cc5f5f;
  text-transform: uppercase;
  font-size: 10rem;
`
const mq = facepaint([
  '@media(min-width: 420px)',
  '@media(min-width: 920px)',
  '@media(min-width: 1120px)',
])

const responsiveBigText = css(
  mq({
    fontSize: ['4rem', '6rem', '8rem', '10rem'],
  })
)
const responsiveMediumText = css(
  mq({
    fontSize: ['1.1rem', '1.3rem', '1.75rem', '1.75rem'],
  })
)

const charPoses = {
  exit: { opacity: 0, y: -100 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 300,
  },
}

const IndexPage = () => (
  <Layout>
    <div className={pageTitleContainerClass}>
      <h2 className={cx(center, responsiveMediumText)}>
        Hey there, my name is
      </h2>
      <h1 className={cx(pageTitleClass, responsiveBigText)}>
        <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
          Karam
        </SplitText>
      </h1>
      <h2 className={cx(center, responsiveMediumText)}>
        A frontend developer who enjoys writing code
      </h2>
      <h2 className={cx(center, responsiveMediumText)}>
        Especially Javascript and CSS
      </h2>
    </div>

  </Layout>
)

export default IndexPage
