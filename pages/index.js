import Layout from "../components/layout"
import { getSortedPostsData } from "../lib/posts"

function IndexPage({ allPostsData }) {
  return (
    <Layout>
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
