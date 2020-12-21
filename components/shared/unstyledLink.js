import Link from "next/link"
import globalVariables from "../../styles/globalVariables"

const UnstyledLink = ({ href, children, className, color, overlaidHeader }) => (
  <Link href={href}>
    <a
      className={`${className} unstyled-link ${
        overlaidHeader ? "overlaid-header" : ""
      }`}
      style={{ color }}
    >
      {children}
    </a>
  </Link>
)

export default UnstyledLink
