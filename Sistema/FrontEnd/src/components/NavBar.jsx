import { Certificate } from '../icons/Certificate';
import { CourseIcon } from '../icons/CourseIcon';
import { HomeIcon } from '../icons/HomeIcon';
import { MyCourse } from '../icons/MyCourse';

export const NavBar = () => {
  return (
    <aside style={{}}>
      <div
        style={{
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
          marginTop: '40px',
          marginBottom: '20px',
        }}
      >
        <img src="../../public/logo.png" alt="logo" />
        <h2>QoriStudy</h2>
      </div>
      <div style={{ marginLeft: '30px' }}>
        <div
          style={{
            display: 'flex',
            gap: '4px',
            alignItems: 'center',
          }}
        >
          <HomeIcon />
          <p>Perfil</p>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '4px',
            alignItems: 'center',
          }}
        >
          <CourseIcon />
          <p>Cursos</p>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '4px',
            alignItems: 'center',
          }}
        >
          <MyCourse />
          <p>Mis cursos</p>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '4px',
            alignItems: 'center',
          }}
        >
          <Certificate />
          <p>Certificados</p>
        </div>
      </div>
    </aside>
  );
};
