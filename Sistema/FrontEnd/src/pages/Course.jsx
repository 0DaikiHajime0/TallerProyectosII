import { SearchBar } from '../components/SearchBar';

export const Course = () => {
  return (
    <>
      <SearchBar />

      <h1>Cursos de programación</h1>
      <div style={{ display: 'flex', gap: '4rem' }}>
        <img
          className="imagen-curso"
          src="https://th.bing.com/th/id/OIP.uY_GNsuWAzw4oKRkf7haIQHaEK?rs=1&pid=ImgDetMain"
          alt="imagen curso"
        />
        <ol>
          <li>Libro de texto: Programación desde cero</li>
          <li>Presentación en diapositivas cada semana</li>
          <li>Video educativo: "[Tema del curso]"</li>
          <li>Ejercicios prácticos: "Problemas para la práctica"</li>
          <li>Guia de estudio: Guia para el examen.</li>
          <li>Software Especifico: Phyton con link de descarga</li>
          <li>Foro de discusión: "Debate semanal: [Tema de Discusión]"</li>
          <li>Evaluación: "Examen final: [Fecha del examen]"</li>
        </ol>
      </div>
    </>
  );
};
