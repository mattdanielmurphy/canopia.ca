import Link from "next/link"
import { useEffect, useState } from "react"
import styled from "styled-components"
import useWindowSize from "../../lib/useWindowSize"

const Button = styled.button`
  width: 40px;
  appearance: none;
  background: none;
  border: none;
`

const NavList = styled.ul`
  ${({ mobileView, isExpanded }) =>
    mobileView && !isExpanded && "display: none"}
`

function Header() {
  const [isExpanded, setExpansion] = useState(false)
  const toggleExpansion = () => setExpansion(!isExpanded)
  const [mobileView, setMobileView] = useState(true)
  const windowSize = useWindowSize()

  useEffect(() => {
    const mobileWidth = 450
    if (windowSize.width <= mobileWidth) {
      if (!mobileView) {
        setExpansion(false) // so doesn't collapse again if made smaller
        setMobileView(true)
      }
    } else setMobileView(false)
    // desired behavior: collapse if set to mobile width, but don't recollapse if already in mobile view
  }, [windowSize.width])

  return (
    <header>
      <div>
        <Link href="/">
          <a>
            <strong>Canopia</strong>.ca
          </a>
        </Link>
      </div>

      {mobileView && (
        <Button onClick={toggleExpansion}>
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Button>
      )}

      <NavList mobileView={mobileView} isExpanded={isExpanded}>
        {[
          { title: "About", route: "/about" },
          { title: "Contact", route: "/contact" },
          { title: "Presentation", route: "/presentation" },
          { title: "Articles & Resources", route: "/articles-and-resources" },
          { title: "Blog Posts", route: "/blog-posts" },
        ].map((navigationItem) => (
          <li key={navigationItem.title}>
            <Link href={navigationItem.route}>
              <a>{navigationItem.title}</a>
            </Link>
          </li>
        ))}
      </NavList>
    </header>
  )
}

export default Header
