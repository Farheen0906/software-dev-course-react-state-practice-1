function GenreList({ genres, setCurrentGenre }) {
  return (
    <div>
      <h2>Select a Genre</h2>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>
            <button onClick={() => setCurrentGenre(genre.name)}>
              {genre.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GenreList;