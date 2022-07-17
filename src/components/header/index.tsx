import Image from "next/image"
import { NavLink } from "../navLink"
import { Container } from "./styled"

export const Header = () => {
  return (
    <Container>
      <section>
        <Image src='/logo.png' width='30px' height='30px' />
        <nav>
          <ul>
            <NavLink href='/' activeClassname="link-active" passHref>
              <a>
                <li>Home</li>
              </a>
            </NavLink>
            <NavLink href='/about/me' activeClassname="link-active" passHref>
              <a>
                <li>Sobre Mim</li>
              </a>
            </NavLink>
            <NavLink href="/projects" activeClassname="link-active" passHref>
              <a>
                <li>Projetos</li>
              </a>
            </NavLink>
          </ul>
        </nav>
      </section>
    </Container>
  )
}
