import React from 'react'
import { Link } from 'gatsby'
import { cx, css } from 'react-emotion'
import Layout from '../components/layout'
import SplitText from 'react-pose-text'
import facepaint from 'facepaint'
import './index.scss'

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
  hoverable: true,
  pressable: true,
  init: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    textShadow: '0px 0px 0px',
  },
  exit: { opacity: 0, y: -100 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 300,
  },
  hover: {
    scale: 1.2,
    y: Math.floor(Math.random() * (-80 - 80 + 1)) + 80,
    x: Math.floor(Math.random() * (-80 - 80 + 1)) + 80,
  },
  press: {
    scale: 2,
    textShadow: '0px 1px 50px',
  },
}

const IndexPage = () => (
  <Layout>
    <div className="pageTitleContainerClass">
      <div>
        <h2 className={cx(center, responsiveMediumText)}>
          Hey there, my name is
        </h2>
      </div>

      <div>
        <h1 className={cx(pageTitleClass, responsiveBigText)}>
          <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
            Karam
          </SplitText>
        </h1>
      </div>

      <div>
        <h2 className={cx(center, responsiveMediumText)}>
          A frontend developer who enjoys writing code
        </h2>
      </div>

      <div>
        <h2 className={cx(center, responsiveMediumText)}>
          Especially Javascript and CSS
        </h2>
      </div>
    </div>
  </Layout>
)

export default IndexPage
