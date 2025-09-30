import React from 'react';
import ContentCard from './ContentCard';

export default function ContentRow({ title, movies }) {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h3 className="text-white text-lg md:text-xl font-bold mb-3 md:mb-4">{title}</h3>
      <div className="relative">
        <div className="flex space-x-2 md:space-x-4 overflow-x-auto pb-4 -mb-4 scrollbar-hide">
          {movies.map((movie) => (
            <ContentCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}