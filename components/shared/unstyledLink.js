import Link from 'next/link'
import styled from 'styled-components'
import global from './globalVariables'

const UnstyledLink = ({
  href,
  children,
  className,
  color,
  hoverColor,
  bold,
  onClick,
  underlined,
}) => {
  return href ? (
    <Link href={href} className={className}>
      <$A
        href={href}
        onClick={onClick}
        className={className}
        color={color || global.color}
        hoverColor={hoverColor || global.green}
        bold={bold}
        underlined={underlined}
      >
        {children}
      </$A>
    </Link>
  ) : (
    <$FakeLink
      onClick={onClick}
      className={className}
      color={color}
      hoverColor
      bold={bold}
    >
      {children}
    </$FakeLink>
  )
}

const $A = styled.a`
  ${({ bold }) => bold && 'font-weight: bold'};
  color: ${({ color }) => color};
  text-decoration: none;
  transition: 0.2s ease;
  &:hover {
    color: ${({ hoverColor }) => hoverColor};
  }
  ${({ underlined, color }) =>
    underlined && `border-bottom: 1px solid ${color}`};
`

const $FakeLink = styled.span`
  ${({ bold }) => bold && 'font-weight: bold'};
  color: ${({ color }) => color};
  text-decoration: none;
  transition: 0.2s ease;
  &:hover {
    color: ${({ hoverColor }) => hoverColor};
    cursor: pointer;
  }
`

export default UnstyledLink
