import { cloneElement, ReactElement } from "react"
import Link, { LinkProps } from 'next/link'
import { useRouter } from "next/router"

interface NavListProps extends LinkProps {
  children: ReactElement
  activeClassname: string
}

export const NavLink = ({ children, activeClassname, ...rest }: NavListProps) => {
  const { asPath } = useRouter()

  const className = asPath === rest.href ? activeClassname : ''

  return (
    <Link {...rest}>
      {cloneElement(children, {
        className
      })}
    </Link>
  )
}
