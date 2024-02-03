import { Link } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';
import { Check } from '../icons/Check';
import { Film } from '../icons/Film';
import { Insignia } from '../icons/Insignia';

export const Home = () => {
  return (
    <>
      <SearchBar />

      <h1>Cursos de programación</h1>
      <div style={{ display: 'flex' }}>
        <img
          className="imagen-curso"
          src="https://edteam-media.s3.amazonaws.com/specialities/big/26d2798f-ef08-4c43-8e99-3e6e6bbce390.png"
          alt="imagen curso"
        />
        <p>
          Este curso te ofrece un buen nivel en programación en python con la inscripción
          de tres meses podras crear programas basicos de aritmetica (suma, resta,
          division y multiplicación). Realizar pequeños programas como calculadoras,
          formularios basicos, funciones básicas, arreglos y más. Ademas contamos con una
          evaluación semanal para poder corroborar tu aprendizaje.
        </p>
      </div>
      <div className="contenedor-home" style={{ margingBottom: '-10rem' }}>
        <div className="home-1">
          <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '10px' }}>
            <Film />
            <p>Clases grabadas en nuestra plataforma en caso no puedas asistir</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '10px' }}>
            <Check />
            <p>Acceso de por vida</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '10px' }}>
            <Insignia />
            <p>Certificación de finalización</p>
          </div>
        </div>
        <div className="home-1">
          <Link to={'/curso/programacion-basica'}>
            <button className="button-1">Inscribirme</button>
          </Link>

          <button className="button-2">Descartar</button>
        </div>
      </div>
    </>
  );
};
