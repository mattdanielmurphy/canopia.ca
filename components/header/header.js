import styled from 'styled-components'
import { Nav } from './nav'
import Logo from './logo'
import global from '../../styles/globalVariables'
import { UnstyledLink } from '../shared'

const $HeaderWrapper = styled.div`
  ${({ overlaidHeader }) =>
    overlaidHeader
      ? `
    position: absolute;
    left: 0;
    right: 0;
    `
      : `
    background: ${global.green};
    `}
`

const $Header = styled.header`
  max-width: ${global.maxWidth};
  margin: auto;
  display: flex;
  align-items: center;
  ${({ overlaidHeader }) =>
    overlaidHeader
      ? `
    padding: 2rem 3rem;
    @media (max-width: 900px) {
      padding: 1.8rem 2rem;
    }
    `
      : `
    padding: 1.2rem 3rem;
    @media (max-width: 900px) {
      padding: 1.6rem 2rem;
    }
  `}
`

const $SiteNameAndLogo = styled.div`
  display: inline-flex;
  align-items: center;
  font-size: 1.5rem;
  @media (max-width: 1050px) {
    font-size: 1.4rem;
  }
  @media (max-width: 900px) {
    font-size: 1.3rem;
  }
`

function Header({ overlaidHeader }) {
  const links = [
    { title: 'About', route: '/about' },
    { title: 'Contact', route: '/contact' },
    { title: 'Presentation', route: '/presentation' },
    { title: 'Articles & Resources', route: '/articles-and-resources' },
    { title: 'Blog Posts', route: '/blog-posts' },
  ]

  return (
    <$HeaderWrapper overlaidHeader={overlaidHeader}>
      <$Header overlaidHeader={overlaidHeader}>
        <$SiteNameAndLogo>
          <UnstyledLink href='/'>
            <Logo color={overlaidHeader ? global.color : 'white'}></Logo>
          </UnstyledLink>
          <UnstyledLink
            href='/'
            color={overlaidHeader ? global.color : 'white'}
          >
            <strong>Canopia</strong>.ca
          </UnstyledLink>
        </$SiteNameAndLogo>

        <Nav links={links} overlaidHeader={overlaidHeader}></Nav>
      </$Header>
    </$HeaderWrapper>
  )
}

export default Header
