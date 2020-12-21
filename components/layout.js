import styled from "styled-components"
import Header from "./header"
import Footer from "./footer"

const S = {}

S.Wrapper = styled.div``
S.Main = styled.main``

function Layout({ children, overlaidHeader }) {
  return (
    <S.Wrapper>
      <Header overlaidHeader={overlaidHeader} />
      <S.Main>{children}</S.Main>
      <Footer />
    </S.Wrapper>
  )
}

export default Layout
