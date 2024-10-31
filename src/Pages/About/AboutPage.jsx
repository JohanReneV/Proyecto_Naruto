import React from 'react';
import './About.css';

const AboutPage = () => {
  return (
    <div className="acerca-de">
      <h1>Acerca de Esta Aplicación</h1>
      <p>
        Esta aplicación está diseñada para ofrecer a los usuarios una experiencia interactiva con los personajes del universo de Naruto.
        Puedes explorar una amplia gama de personajes, ver detalles sobre ellos y marcarlos como favoritos.
      </p>
      <p>
        La aplicación utiliza la API de Dattebayo para obtener datos sobre los personajes y permite a los usuarios gestionar su lista de favoritos.
        Además, cuenta con una interfaz sencilla y fácil de usar, diseñada para mejorar la experiencia del usuario.
      </p>
      <h2>Características Principales</h2>
      <ul>
        <li>Explora personajes de Naruto con imágenes y detalles.</li>
        <li>Marca tus personajes favoritos y accede a ellos desde una página dedicada.</li>
        <li>Navegación sencilla entre las páginas de personajes y favoritos.</li>
      </ul>
      <h2>Sobre el Desarrollador</h2>
      <p>
        Esta aplicación fue desarrollada por [Tu Nombre], un estudiante de Ingeniería de Sistemas con pasión por la programación y el diseño de aplicaciones web.
        Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto.
      </p>
      <h2>Agradecimientos</h2>
      <p>
        Agradecimientos especiales a los creadores de la API de Dattebayo y a la comunidad de desarrolladores que comparten sus conocimientos y recursos.
      </p>
    </div>
  );
};

export default AboutPage;
