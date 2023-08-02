import { Miscelanea } from '../icons/icons'

const About = () => {
  return (
    <section className="bg-primary" id="about">
      <div className="container m-auto max-w-3xl px-12 py-24 text-white text-center">
        <div className="flex justify-center mb-8 text-secondary">
          <Miscelanea />
        </div>

        <div className="font-semibold mb-8 text-xl">
          Vivir rodeado de naturaleza, seguridad con tecnología de última generación y la mayor variedad de deportes.
        </div>
        <div>
          <p className="text-wrap">
            El lujo esencial de poder vivir en un ecosistema semejante, rodeado de amplias y extensas areas verdes y de
            lagunas o cruzarse con liebres, lechuzas y zorros.
            <br />
            <br />
            Chicos en bici yendo al colegio, gente caminando con amigos o haciendo deportes y cabalgatas, son las
            imágenes más comunes de Estancias.
            <br />
            <br />
            Seguridad con tecnología de última generación.
            <br />
            <br />
            Disfrutar de El Pueblo, tomar un café o comer en restaurantes y encontrarse con amigos.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
