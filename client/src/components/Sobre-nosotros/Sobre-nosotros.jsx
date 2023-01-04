import img from "../Assets/img/Mate.jpg";
import NavBar from "../NavBar/NavBar";
import Waves from "../Waves/Waves";
import { useSelector } from "react-redux";
import "./Sobre-nosotros.scss";

const SobreNosotros = () => {
  const mode = useSelector((store) => store.theme.mode);
  const Theme = useSelector((store) => store.theme);
  return(
    <div 
      className="About"
      style={{ background: Theme[mode].primary }}
    >
      <NavBar/>
      <div className="About-Container">
        <h1 style={{ color: Theme[mode].textPrimary, fontFamily: "roboto" }}>Sobre Nosotros</h1>
        <div className="About-content" style={{ color: Theme[mode].textPrimary }}>
          <div className="About-info">
            <p className="About-text" style={{ color: Theme[mode].textPrimary}}>
            Somos una empresa dedicada a la venta de productos naturales y orgánicos de alta calidad. Nos enorgullece ofrecer a nuestros clientes una amplia selección de opciones saludables y sostenibles para su consumo diario. Creemos firmemente en el poder curativo y beneficioso de la naturaleza y queremos compartir ese conocimiento y esos beneficios con nuestros clientes. Trabajamos directamente con productores locales y de todo el mundo para asegurarnos de que nuestros productos sean frescos y de la más alta calidad. Además, nos esforzamos por tener un impacto positivo en la comunidad y el medio ambiente a través de nuestras prácticas comerciales responsables y sostenibles. ¡Esperamos que te unas a nosotros en nuestra misión de promover un estilo de vida saludable y sostenible!</p>
            <div className="Creators">
              <h3>Desarrolladores:</h3>
              <p className="Creators-intro" style={{ color: Theme[mode].textPrimary }}>Somos un grupo de desarrolladores web altamente capacitados y comprometidos con brindar soluciones innovadoras y de alta calidad a nuestros clientes. Nos especializamos en el desarrollo de sitios y aplicaciones web utilizando las últimas tecnologías y tendencias en el mercado. Nos enorgullece trabajar junto a nuestros clientes para entender sus necesidades y brindarles soluciones personalizadas que se ajusten a sus requerimientos y objetivos. Estamos constantemente aprendiendo y actualizando nuestras habilidades para asegurar que siempre estemos a la vanguardia en el mundo del desarrollo web. ¡Esperamos tener la oportunidad de trabajar contigo en tu próximo proyecto!</p>
              <ul>
                <li>Exequiel Rodríguez - 
                  <a href="https://github.com/Kitatzu" target="_blank" rel="noreferrer" style={{ color: Theme[mode].textPrimary }}>
                    <i class="fa-brands fa-github fa-2x"></i>
                  </a> 
                  <a href="https://www.linkedin.com/in/exequielmr/" target="_blank" rel="noreferrer" style={{ color: Theme[mode].textPrimary }}>
                    <i class="fa-brands fa-linkedin fa-2x linkedin"></i>
                  </a>
                </li>
                <li>Adrián Perez - 
                  <a href="https://github.com/adrian4058" target="_blank" rel="noreferrer" style={{ color: Theme[mode].textPrimary }}>
                    <i class="fa-brands fa-github fa-2x"></i>
                  </a> 
                  <a href="https://www.linkedin.com/in/adrian4058/" target="_blank" rel="noreferrer" style={{ color: Theme[mode].textPrimary }}>
                    <i class="fa-brands fa-linkedin fa-2x linkedin"></i>
                  </a>
                </li>
                <li>Jhonatan Iñiguez - 
                  <a href="https://github.com/copaTech-98" target="_blank" rel="noreferrer" style={{ color: Theme[mode].textPrimary }}>
                    <i class="fa-brands fa-github fa-2x"></i>
                  </a> 
                  <a href="https://www.linkedin.com/in/jhonatan-iñiguez-733691211/" target="_blank" rel="noreferrer" style={{ color: Theme[mode].textPrimary }}>
                    <i class="fa-brands fa-linkedin fa-2x linkedin"></i>
                  </a>
                </li>
                <li>Nazareno Maestre - 
                  <a href="https://github.com/NazaMaestre" target="_blank" rel="noreferrer" style={{ color: Theme[mode].textPrimary }}>
                    <i class="fa-brands fa-github fa-2x"></i>
                  </a> 
                  <a href="https://www.linkedin.com/in/nazareno-maestre-40559624b/" target="_blank" rel="noreferrer" style={{ color: Theme[mode].textPrimary }}>
                    <i class="fa-brands fa-linkedin fa-2x linkedin"></i>
                  </a>
                </li>
                <li>Danilo Urrego - 
                  <a href="https://github.com/DaniloVZR" target="_blank" rel="noreferrer" style={{ color: Theme[mode].textPrimary }}>
                    <i class="fa-brands fa-github fa-2x"></i>
                  </a> 
                  <a href="https://www.linkedin.com/in/joimar-danilo-urrego-david-7a5581248/" target="_blank" rel="noreferrer" style={{ color: Theme[mode].textPrimary }}>
                    <i class="fa-brands fa-linkedin fa-2x linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="About-img-container">
            <img className="About-img" src={img} alt="sobre-nosotros" />
          </div>
        </div>
      </div>
      <Waves/>
    </div>
  )
}

export default SobreNosotros;