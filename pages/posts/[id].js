import Layout from '../../components/layout'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import { $TextBody, $H2 } from '../../components/shared/'

function PostTemplate({ content, data }) {
  const frontmatter = data
  return (
    <Layout>
      <$TextBody>
        <$H2>{frontmatter.title}</$H2>
        <h3>{frontmatter.date}</h3>
        <ReactMarkdown source={content} />
      </$TextBody>
    </Layout>
  )
}

PostTemplate.getInitialProps = async ({ query }) => {
  const rawFile = await import(`../../posts/${query.id}.md`)
  const { data, content } = matter(rawFile.default)
  return { data, content }
}

export default PostTemplate
