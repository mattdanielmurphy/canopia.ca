import Layout from "../components/layout"
import { getSortedPostsData } from "../lib/posts"

function IndexPage({ allPostsData }) {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <h2 className="p-5 my-8 text-lg font-bold bg-pink-200 md:text-2xl">
          Welcome to Canopia.ca
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="p-4 my-4 text-md font-bold md:text-1xl">Latest posts</h3>
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
