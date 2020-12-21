import Link from "next/link"
import globalVariables from "../../styles/globalVariables"

const UnstyledLink = ({ href, children, className, color }) => (
  <Link href={href}>
    <a className={`${className} unstyled-link`} style={{ color }}>
      {children}
    </a>
  </Link>
)

export default UnstyledLink
