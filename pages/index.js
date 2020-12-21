import Layout from "../components/layout"
import Header from "../components/header"
import { getSortedPostsData } from "../lib/posts"
import global from "../styles/globalVariables"
import styled from "styled-components"
const S = {}

S.Smaller = styled.span`
  font-size: 0.9em;
  color: #333;
`

S.Green = styled.strong`
  font-weight: normal;
  color: ${global.green};
`

S.H1 = styled.h1`
  font-weight: normal;
  text-align: center;
`

S.Hero = styled.section`
  height: 100vh;
  background: #edeef0;
  background-image: url("trees.jpeg");
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
        <S.H1>
          Information &amp; Strategies
          <br />
          <S.Smaller>for the</S.Smaller>{" "}
          <S.Green>Protection &amp; Regrowth</S.Green>
          <br />
          <S.Smaller>of</S.Smaller> <S.Green>Perennial Ecosystems</S.Green>
        </S.H1>
      </S.Hero>
      <Header></Header>
      <h2>Welcome to Canopia.ca</h2>
      <div>
        <h3>Latest posts</h3>
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
