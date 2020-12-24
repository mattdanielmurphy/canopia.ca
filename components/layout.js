import styled from 'styled-components'
import Header from './header'
import Footer from './footer'

const $Wrapper = styled.div``
const $Main = styled.main``

function Layout({ children, overlaidHeader }) {
  return (
    <$Wrapper>
      <Header overlaidHeader={overlaidHeader} />
      <$Main>{children}</$Main>
      <Footer />
    </$Wrapper>
  )
}

export default Layout
