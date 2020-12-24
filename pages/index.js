import Layout from '../components/layout'
import Header from '../components/header'
import { getSortedPostsData } from '../lib/posts'
import { Hero } from '../components/index/hero'

function IndexPage({ allPostsData }) {
  return (
    <Layout overlaidHeader>
      <Hero />
      <Header></Header>
      <section id='latest-posts'>
        <h2>Latest Posts</h2>
        <div>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                <a href={`/posts/${id}`}>{title}</a> ({date})
              </li>
            ))}
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                <a href={`/posts/${id}`}>{title}</a> ({date})
              </li>
            ))}
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                <a href={`/posts/${id}`}>{title}</a> ({date})
              </li>
            ))}
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                <a href={`/posts/${id}`}>{title}</a> ({date})
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return { props: { allPostsData } }
}

export default IndexPage
