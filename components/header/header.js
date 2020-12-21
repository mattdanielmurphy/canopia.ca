import styled from "styled-components"
import { Nav } from "./nav"
import Logo from "./logo"
import global from "../../styles/globalVariables"
import UnstyledLink from "../shared"

const S = {}

S.HeaderWrapper = styled.div`
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

S.Header = styled.header`
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

S.SiteNameAndLogo = styled.div`
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
    { title: "About", route: "/about" },
    { title: "Contact", route: "/contact" },
    { title: "Presentation", route: "/presentation" },
    { title: "Articles & Resources", route: "/articles-and-resources" },
    { title: "Blog Posts", route: "/blog-posts" },
  ]

  return (
    <S.HeaderWrapper overlaidHeader={overlaidHeader}>
      <S.Header overlaidHeader={overlaidHeader}>
        <S.SiteNameAndLogo>
          <UnstyledLink href="/">
            <Logo color={overlaidHeader ? global.color : "white"}></Logo>
          </UnstyledLink>
          <UnstyledLink
            href="/"
            color={overlaidHeader ? global.color : "white"}
          >
            <strong>Canopia</strong>.ca
          </UnstyledLink>
        </S.SiteNameAndLogo>

        <Nav links={links} overlaidHeader={overlaidHeader}></Nav>
      </S.Header>
    </S.HeaderWrapper>
  )
}

export default Header
