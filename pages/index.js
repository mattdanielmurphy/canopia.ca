import Layout from '../components/layout'
import Header from '../components/header'
import { getSortedPostsData } from '../lib/posts'
import styled from 'styled-components'
import { UnstyledLink } from '../components/shared'
import { Hero, PostPreview } from '../components/index'

function Homepage({ allPostsData }) {
  return (
    <Layout overlaidHeader>
      <Hero />
      <Header></Header>
      <$LatestPosts id='latest-posts'>
        <$H2>Latest Posts</$H2>
        <div>
          <ul>
            {allPostsData.map(({ id, date, title, preview }) => (
              <li key={id}>
                <UnstyledLink href={`/posts/${id}`}>
                  <PostPreview date={date} title={title} preview={preview} />
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </div>
      </$LatestPosts>
    </Layout>
  )
}

const $LatestPosts = styled.section`
  margin-top: 8em;
`

const $H2 = styled.h2`
  font-weight: normal;
  font-size: 2.5em;
  margin: 1.5em 0;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.03em;
`

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return { props: { allPostsData } }
}

export default Homepage
