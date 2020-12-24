import global from '../../styles/globalVariables'
import styled from 'styled-components'
import { UnstyledLink } from '../shared'
import Link from 'next/link'

function AnchorLink({ href, children }) {
  return (
    <Link href={href}>
      <a
        href={href}
        onClick={(e) => {
          console.log('hi')
          e.preventDefault()
        }}
      >
        {children}
      </a>
    </Link>
  )
}

const Hero = () => (
  <$Hero>
    <$Dialog>
      <$H1>
        Information &amp; Strategies
        <br />
        <$Smaller>for the</$Smaller> <$Green>Protection &amp; Regrowth</$Green>
        <br />
        <$Smaller>of</$Smaller> <$Green>Perennial Ecosystems</$Green>
      </$H1>
      <$AnchorLink href='#latest-posts'>See recent posts</$AnchorLink>
    </$Dialog>
  </$Hero>
)

const $Smaller = styled.span`
  font-size: 0.9em;
  color: #333;
`

const $Green = styled.strong`
  font-weight: normal;
  color: ${global.green};
`

const $Dialog = styled.div`
  padding: 2rem;
  background: rgba(237, 238, 240, 0.5);
`

const $AnchorLink = styled(AnchorLink)`
  padding: 2rem;
  background: rgba(237, 238, 240, 0.5);
`

const $H1 = styled.h1`
  font-weight: normal;
  text-align: center;
`

const $Hero = styled.section`
  height: 100vh;
  background: rgb(237, 238, 240);
  background-image: url('trees.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  display: flex;
  align-items: center;
  justify-content: center;
`

module.exports = {
  Hero,
}
