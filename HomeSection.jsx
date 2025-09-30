import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Play, Info } from 'lucide-react';

export default function HeroSection({ movie }) {
  if (!movie) return null;

  return (
    <div className="relative h-[56.25vw] max-h-[80vh] w-full">
      <img
        src={movie.backdrop_url}
        alt={movie.title}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 p-4 sm:p-6 lg:p-12 w-full md:w-2/3 lg:w-1/2">
        <div className="transform transition-all duration-500">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg">
            {movie.title}
          </h2>
          <p className="mt-2 md:mt-4 text-sm sm:text-base lg:text-lg text-gray-200 line-clamp-3 drop-shadow-md">
            {movie.description}
          </p>
          <div className="mt-4 md:mt-6 flex items-center space-x-3">
            <Link to={createPageUrl(`Watch?id=${movie.id}`)}>
              <Button className="bg-white text-black hover:bg-gray-200 rounded-md px-4 sm:px-8 py-2 text-base sm:text-lg font-bold">
                <Play className="w-5 h-5 sm:w-6 sm:h-6 mr-2 fill-current" />
                Play
              </Button>
            </Link>
            <Button
              variant="secondary"
              className="bg-gray-500/70 text-white hover:bg-gray-500/50 rounded-md px-4 sm:px-8 py-2 text-base sm:text-lg font-bold"
            >
              <Info className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              More Info
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}