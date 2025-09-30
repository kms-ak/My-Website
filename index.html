import React, { useState, useEffect } from 'react';
import { Movie } from '@/entities/Movie';
import { Genre } from '@/entities/Genre';
import HeroSection from '@/components/home/HeroSection';
import ContentRow from '@/components/home/ContentRow';
import { Skeleton } from '@/components/ui/skeleton';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const [movieData, genreData] = await Promise.all([
          Movie.list('-release_year'),
          Genre.list(),
        ]);
        setMovies(movieData);
        setGenres(genreData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const featuredMovie = movies[0];

  if (isLoading) {
    return (
      <div className="bg-[#141414] min-h-screen">
        <Skeleton className="h-[56.25vw] max-h-[80vh] w-full bg-gray-800" />
        <div className="px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          <Skeleton className="h-8 w-1/4 bg-gray-800" />
          <div className="flex space-x-4">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-48 w-32 bg-gray-800 rounded-md" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {featuredMovie && <HeroSection movie={featuredMovie} />}
      <div className="py-8 space-y-8 md:space-y-12">
        {genres.map((genre) => {
          const moviesInGenre = movies.filter((movie) =>
            movie.genres?.includes(genre.name)
          );
          if (moviesInGenre.length === 0) return null;
          return (
            <ContentRow
              key={genre.id}
              title={genre.name}
              movies={moviesInGenre}
            />
          );
        })}
      </div>
    </div>
  );
}