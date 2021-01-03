import styled from 'styled-components'
import { UnstyledLink } from '../components/shared'
import { globalVariables } from '../components/shared'

const $Ul = styled.ul`
  list-style: none;
  color: ${globalVariables.oppositeColor};
`

const $Footer = styled.footer`
  background: black;
  margin-top: 6rem;
  padding: 2rem 0;
  flex-shrink: 0;
  text-align: center;
`

function Footer() {
  return (
    <$Footer>
      <$Ul>
        <li>
          Site created by{' '}
          <UnstyledLink
            underlined
            color={globalVariables.oppositeColor}
            hoverColor={globalVariables.lightGreen}
            href='https://www.linkedin.com/in/matthew-daniel-m-00b38489/'
          >
            Matthew Daniel Murphy
          </UnstyledLink>
          .
        </li>
      </$Ul>
    </$Footer>
  )
}

export default Footer
