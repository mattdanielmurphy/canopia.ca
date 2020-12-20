import Link from "next/link"
import { useState } from "react"

function Header({ borderless, floatOnTop }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <header>
      <div>
        <div>
          <Link href="/">
            <a>
              Canopia<span style={{ fontWeight: "normal" }}>.ca</span>
            </a>
          </Link>
        </div>

        <button onClick={() => toggleExpansion(!isExpanded)}>
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <ul>
          {[
            { title: "About", route: "/about" },
            { title: "Contact", route: "/contact" },
            { title: "Presentation", route: "/presentation" },
            { title: "Articles & Resources", route: "/articles-and-resources" },
            { title: "Blog Posts", route: "/blog-posts" },
          ].map((navigationItem) => (
            <li key={navigationItem.title}>
              <Link href={navigationItem.route}>
                <a>{navigationItem.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
