import Layout from '../components/layout'

function AboutPage() {
  return (
    <Layout>
      <div>
        <div>
          {[
            {
              heading: `What is Tailwind?`,
              body: `Tailwind CSS is a highly customizable, low-level CSS framework that gives you all
              of the building blocks you need to build bespoke designs without any
              annoying opinionated styles you have to fight to override.`,
            },
            {
              heading: `What is Next.js?`,
              body: `Next.js is a minimalistic framework for creating server-rendered
              React applications.`,
            },
          ].map((section) => (
            <div key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
