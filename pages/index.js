import Layout from '../components/layout'
import Header from '../components/header'
import { getSortedPostsData } from '../lib/posts'
import global from '../styles/globalVariables'
import styled from 'styled-components'
import { UnstyledLink } from '../components/shared'
const S = {}

S.Smaller = styled.span`
  font-size: 0.9em;
  color: #333;
`

S.Green = styled.strong`
  font-weight: normal;
  color: ${global.green};
`

S.Dialog = styled.div`
  padding: 2rem;
  background: rgba(237, 238, 240, 0.5);
`

S.Link = styled(UnstyledLink)`
  padding: 2rem;
  background: rgba(237, 238, 240, 0.5);
`

S.H1 = styled.h1`
  font-weight: normal;
  text-align: center;
`

S.Hero = styled.section`
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

function IndexPage({ allPostsData }) {
  return (
    <Layout overlaidHeader>
      <S.Hero>
        <S.Dialog>
          <S.H1>
            Information &amp; Strategies
            <br />
            <S.Smaller>for the</S.Smaller>{' '}
            <S.Green>Protection &amp; Regrowth</S.Green>
            <br />
            <S.Smaller>of</S.Smaller> <S.Green>Perennial Ecosystems</S.Green>
          </S.H1>
          <S.Link>See recent posts</S.Link>
        </S.Dialog>
      </S.Hero>
      <Header></Header>
      <h2>Latest Posts</h2>
      <div>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <a href={`/posts/${id}`}>{title}</a> ({date})
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return { props: { allPostsData } }
}

export default IndexPage
