import React, { useEffect, useState } from 'react';
import './Favoritos.css';

const Favoritos = () => {
  const [favorites, setFavorites] = useState([]);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }

    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://dattebayo-api.onrender.com/characters');
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        setCharacters(data.characters);
      } catch (error) {
        console.error('Error al obtener los personajes:', error);
      }
    };

    fetchCharacters();
  }, []);

  const favoriteCharacters = characters.filter(character => favorites.includes(character.id));

  return (
    <div className="favoritos-page">
      <h1>Mis Favoritos</h1>
      <div className="favorites-container">
        {favoriteCharacters.length === 0 ? (
          <p>No tienes personajes favoritos aún.</p>
        ) : (
          favoriteCharacters.map((character) => (
            <div key={character.id} className="favorito-card">
              <h2>{character.name || 'Nombre no disponible'}</h2>
              {character.images.length > 0 ? (
                <img src={character.images[0]} alt={`Imagen de ${character.name}`} />
              ) : (
                <div className="no-image">Sin Imagen</div>
              )}
              <p>Edad: {character.personal?.age?.['Part II'] || 'No disponible'}</p>
              <p>Clan: {character.personal?.clan || 'No disponible'}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Favoritos;
