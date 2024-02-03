import { Facebook } from '../icons/Facebook';
import { Instagram } from '../icons/Instagram';
import { TikTok } from '../icons/TikTok';
import { WhatsApp } from '../icons/WhatsApp';

export const Footer = () => {
  return (
    <footer>
      <div></div>
      <div>
        <h3>Soluciones</h3>
        <p>Cursos</p>
        <p>Especializaciones</p>
        <p>Servicios</p>
      </div>
      <div>
        <h3>Más información</h3>
        <p>Politica de organizacion</p>
        <p>Politica de calidad</p>
        <p>Politica de privacidad</p>
        <p>Terminos y condiciones</p>
      </div>
      <div>
        <h3>Redes Sociales</h3>
        <div className="redes">
          <a href="">
            <WhatsApp />
          </a>
          <a href="https://www.instagram.com/">
            <Instagram />
          </a>
          <a href="https://www.facebook.com/">
            <Facebook />
          </a>
          <a href="https://www.tiktok.com/">
            <TikTok />
          </a>
        </div>
      </div>
    </footer>
  );
};
