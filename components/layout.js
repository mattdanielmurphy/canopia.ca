import styled from 'styled-components'
import Header from './header'
import Footer from './footer'

function Layout({ children, overlaidHeader }) {
  return (
    <$Wrapper overlaidHeader={overlaidHeader}>
      <$Content>
        <Header overlaidHeader={overlaidHeader} />
        <$Main>{children}</$Main>
      </$Content>
      <Footer />
    </$Wrapper>
  )
}

const $Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const $Content = styled.div`
  flex: 1 0 auto;
`
const $Main = styled.main``

export default Layout
