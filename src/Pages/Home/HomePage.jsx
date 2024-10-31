import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 6;
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://dattebayo-api.onrender.com/characters');
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        setCharacters(data.characters);
        setCurrentPage(1);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  const handleFavorite = (character) => {
    setFavorites((prevFavorites) => {
      const isFavorited = prevFavorites.includes(character.id);
      const updatedFavorites = isFavorited
        ? prevFavorites.filter((id) => id !== character.id)
        : [...prevFavorites, character.id];

      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
  };

  if (loading) {
    return <div className="loading">Cargando personajes...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}. Intenta refrescar la página.</div>;
  }

  const getPaginatedCharacters = () => {
    const indexOfLastCharacter = currentPage * charactersPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
    return characters.slice(indexOfFirstCharacter, indexOfLastCharacter);
  };

  const totalPages = Math.ceil(characters.length / charactersPerPage);

  return (
    <div className="home-page">
      <h1>Personajes de Naruto</h1>
      <div className="characters-container">
        {getPaginatedCharacters().map((character) => (
          <div key={character.id} className="character-card" onClick={() => handleCharacterClick(character)}>
            <div className="character-content">
              <div className="images-container">
                {character.images.length > 0 ? (
                  <img
                    src={character.images[0]}
                    alt={`Imagen de ${character.name}`}
                    className="character-image"
                  />
                ) : (
                  <div className="no-image">Sin Imagen</div>
                )}
              </div>
              <div className="character-info">
                <h3 className="character-name">{character.name || 'Nombre no disponible'}</h3>
                <p className="character-age">
                  Edad: {character.personal?.age?.['Part II'] || 'No disponible'}
                </p>
                <p className="character-clan">
                  Clan: {character.personal?.clan || 'No disponible'}
                </p>
                <button
                  className={`favorite-button ${favorites.includes(character.id) ? 'favorited' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFavorite(character);
                  }}
                >
                  {favorites.includes(character.id) ? '★ Favorito' : '☆ Favorito'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          aria-label="Página anterior"
        >
          Anterior
        </button>
        <span>Página {currentPage} de {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          aria-label="Siguiente página"
        >
          Siguiente
        </button>
      </div>

      {selectedCharacter && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedCharacter.name || 'Nombre no disponible'}</h2>
            {selectedCharacter.images.length > 0 && (
              <img src={selectedCharacter.images[1]} alt={`Imagen de ${selectedCharacter.name}`} />
            )}
            <p>Edad: {selectedCharacter.personal?.age?.['Part II'] || 'No disponible'}</p>
            <p>Clan: {selectedCharacter.personal?.clan || 'No disponible'}</p>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default HomePage;
