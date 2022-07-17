import Image from "next/image";
import { Container } from "./styled";

export default function AboutMe() {
  return (
    <Container>
      <div className="description">
        <section>
          IMH
        </section>
        <p>Olá, me chamo thiago e moro em São Luis do Maranhão. Estou na trilha de desenvolvimento web desde novembro de 2020, desde então estou em constante busca do aprendizado e evolução. Em maio de 2021 consegui um estágio no qual obtibve uma grande evolução nos conhecimentos técnicos, hoje possuo maior contato com desenvolvimento de aplicações front-end utilizando ReactJS e todo seu ecossistema de bibliotecas.</p>
      </div>

      <div className="description">
        <section>
          <img src="/jucema.jpg"/>
          <div>
            <h1>Experiência</h1>
            <p><span>Empresa:</span> Junta Comercial do Maranhão</p>
            <p><span>Cargo:</span> Estagiário Front-End</p>
            <p><span>Início:</span> 05/2021 | status: atual</p>
            <p><span>Descrição:</span> Tive minha primeira oportunidade na JUCEMA, lá foi me dada a oportunidade de desenvolver dois dashboards. O objetivo era melhorar as funcionalidades já existentes, então dei início ao projeto do absoluto zero até onde está hoje, como foram as primeiras experiencias com react e com aplicações reais, pela falta de experiência acabou não ficando tão responsivo, fora isso, todos os requisitos foram atendidos com sucesso e novas implementações feitas.</p>

            <span className="links-dashboards">
              <a href="#">Dashboard 1</a>
              <a href="#">Dashboard 2</a>
            </span>
          </div>
        </section>
      </div>

      <div className="description">
        <section>
          Stack
        </section>
            Descrição - stacks
        <p>Tive minha primeira   oportunidade na JUCEMA, lá foi me dada a oportunidade de desenvolver dois dashboards. O objetivo era melhorar as funcionalidades já existentes, então dei início ao projeto do absoluto zero até onde está hoje, como foram as primeiras experiencias com react e com aplicações reais, pela falta de experiência acabou não ficando tão responsivo, fora isso, todos os requisitos foram atendidos com sucesso e novas implementações feitas.</p>
      </div>

      <div className="description">
        <section>
          Seção Projetos
        </section>
            Descrição - projeto
        <p>Tive minha primeira   oportunidade na JUCEMA, lá foi me dada a oportunidade de desenvolver dois dashboards. O objetivo era melhorar as funcionalidades já existentes, então dei início ao projeto do absoluto zero até onde está hoje, como foram as primeiras experiencias com react e com aplicações reais, pela falta de experiência acabou não ficando tão responsivo, fora isso, todos os requisitos foram atendidos com sucesso e novas implementações feitas.</p>
      </div>
    </Container>
  )
}
