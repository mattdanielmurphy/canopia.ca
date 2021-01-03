import global from '../shared/globalVariables'
import styled from 'styled-components'
import Link from 'next/link'

function AnchorLink({ anchor, children }) {
  const scrollToAnchor = (e) => {
    e.preventDefault()
    const el = document.querySelector(anchor)
    el.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <Link href={anchor}>
      <$A scrollToAnchor={scrollToAnchor} href={anchor}>
        {children}
      </$A>
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
      <AnchorLink anchor='#latest-posts'>See latest posts</AnchorLink>
    </$Dialog>
  </$Hero>
)

const $A = styled(({ children, anchor, className, scrollToAnchor }) => (
  <a href={anchor} className={className} onClick={scrollToAnchor}>
    {children}
  </a>
))`
  cursor: pointer;
  font-size: 1.3em;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: black;
  padding: 0.2em 0.5em;
  text-decoration: none;
  border-bottom: 2px solid black;
  transition: color ${global.transitionTime};
  &:hover {
    color: ${global.green};
  }
`

const $Smaller = styled.span`
  font-size: 0.9em;
  color: #333;
`

const $Green = styled.strong`
  font-weight: normal;
  color: ${global.green};
`

const $Dialog = styled.div`
  padding: 2em;
  background: rgba(237, 238, 240, 0.5);
  text-align: center;
`

const $H1 = styled.h1`
  font-weight: normal;
  text-align: center;
  margin-bottom: 1em;
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
