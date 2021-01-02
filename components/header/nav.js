import { useEffect, useState } from 'react'
import styled from 'styled-components'
import useWindowSize from '../../lib/useWindowSize'
import global from '../../styles/globalVariables'
import { UnstyledLink } from '../shared'

const $BlankButton = styled.button`
  appearance: none;
  background: none;
  border: none;
  cursor: pointer;
`

const $Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const $ToggleNavButton = styled($BlankButton)`
  width: 40px;
  align-self: flex-end;
`

const $CloseNavMenuOverlay = styled($BlankButton)`
  position: absolute;
  top: 13rem;
  background: rgba(${global.colorAsRGB}, 0.7);
  bottom: 0;
  left: 0;
  right: 0;
  cursor: url('close-cursor.svg'), auto;
`

const $NavList = styled.ul`
  list-style: none;
  margin: 0;
  justify-content: flex-end;
  padding: 0;
  transition: opacity ${global.transitionTime};
  ${({ mobileView, isExpanded }) =>
    mobileView
      ? `
      display: ${isExpanded ? 'block' : 'none'};
      position: absolute;
      top: 0;
      text-align: right;
      left: 0;
      right: 0;
      background: ${global.color};
      padding: 2rem;
    `
      : `
      display: flex;
    `}
`

const $NavItem = styled.li`
  ${({ mobileView }) =>
    !mobileView &&
    `
  `}
`

const $Link = styled(UnstyledLink)`
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.09rem;
  padding: 0 1.5rem;
  ${({ mobileView }) =>
    mobileView
      ? `
      padding: 0.2rem;
      font-size: 1.6rem;
    `
      : `
      @media (max-width: 1200px) {
        padding: 0 1rem;
      }
      @media (max-width: 1050px) {
        padding: 0 0.8rem;
        font-size: 0.95rem;
      }
      @media (max-width: 950px) {
        padding: 0 0.7rem;
        font-size: 0.85rem;
      }
    `}
`

export function Nav({ links, overlaidHeader }) {
  const [isExpanded, setExpansion] = useState(false)
  const toggleExpansion = () => setExpansion(!isExpanded)
  const [mobileView, setMobileView] = useState(true)
  const windowSize = useWindowSize()

  useEffect(() => {
    if (windowSize.width <= global.mobileWidth) {
      if (!mobileView) {
        setExpansion(false) // so doesn't collapse again if made smaller
        setMobileView(true)
      }
    } else setMobileView(false)
  }, [windowSize.width])

  return (
    <$Nav>
      {mobileView && (
        <>
          <$ToggleNavButton onClick={toggleExpansion}>
            <svg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
              <title>Menu</title>
              <path
                fill={global.color}
                d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'
              />
            </svg>
          </$ToggleNavButton>
          {isExpanded && (
            <$CloseNavMenuOverlay
              onClick={(e) => {
                // these lines are so cursor goes back to normal immediately after clicking; otherwise,
                // user must move cursor first... I don't know why a "0ms" timeout works but it does
                e.target.style.cursor = 'default'
                setTimeout(() => toggleExpansion(), 0)
              }}
            />
          )}
        </>
      )}

      <$NavList mobileView={mobileView} isExpanded={isExpanded}>
        {links.map((navigationItem) => (
          <$NavItem key={navigationItem.title}>
            <$Link
              href={navigationItem.route}
              mobileView={mobileView}
              color={overlaidHeader ? global.color : 'white'}
              overlaidHeader={overlaidHeader}
            >
              {navigationItem.title}
            </$Link>
          </$NavItem>
        ))}
      </$NavList>
    </$Nav>
  )
}
