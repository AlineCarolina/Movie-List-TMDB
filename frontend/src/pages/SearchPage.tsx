import { useState } from "react";
import { getMoviesFromTMDB } from "../services/api";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
}

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const results = await getMoviesFromTMDB(query);
      setMovies(results);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">MovieList 🎬</h1>
        <p className="text-gray-400">Encontre seu filme favorito rapidamente</p>
      </header>

      {/* Pesquisa */}
      <div className="w-full max-w-xl flex gap-2 mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Digite o nome do filme"
          className="flex-1 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-700 px-6 rounded-lg font-semibold transition-colors"
        >
          Buscar
        </button>
      </div>

      {/* Mensagens */}
      {loading && <p className="text-gray-400">Carregando...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && movies.length === 0 && query && (
        <p className="text-gray-400">Nenhum filme encontrado.</p>
      )}

      {/* Resultados */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-80 object-cover"
              />
            ) : (
              <div className="w-full h-80 bg-gray-700 flex items-center justify-center text-gray-400">
                Sem imagem
              </div>
            )}
            <div className="p-4">
              <h2 className="text-lg font-bold truncate">{movie.title}</h2>
              <p className="text-gray-400">
                {movie.release_date?.split("-")[0] ?? "Ano desconhecido"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
