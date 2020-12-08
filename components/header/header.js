import Link from "next/link"
import { useState } from "react"
import styles from './header.module.css'

function Header({ borderless, floatOnTop }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <header className={`${floatOnTop ? "floating" : ""}`}>
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:flex-no-wrap md:p-8">
        <div className="flex items-center">
          <Link href="/">
            <a className="text-3xl font-bold text-black">
              Canopia<span style={{ fontWeight: "normal" }}>.ca</span>
            </a>
          </Link>
        </div>

        <button
          className="flex items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <ul
          className={`${
            isExpanded ? `block` : `hidden`
          } md:flex flex-col md:flex-row md:items-center md:justify-center text-lg w-full md:w-auto`}
        >
          {[
            { title: "About", route: "/about" },
            { title: "Contact", route: "/contact" },
            { title: "Presentation", route: "/presentation" },
            { title: "Articles & Resources", route: "/articles-and-resources" },
            { title: "Blog Posts", route: "/blog-posts" },
          ].map((navigationItem) => (
            <li className="mt-3 md:mt-0 md:ml-6" key={navigationItem.title}>
              <Link href={navigationItem.route}>
                <a className="block text-black uppercase tracking-wide">
                  {navigationItem.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header