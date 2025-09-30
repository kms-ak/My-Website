import React from 'react';
import { Button } from '@/components/ui/button';
import { User } from '@/entities/User';
import { Clapperboard } from 'lucide-react';

export default function LoginPrompt() {
  const handleLogin = async () => {
    // This will redirect the user to the Google login page.
    // After login, they will be returned to the app.
    await User.login();
  };

  return (
    <div className="fixed inset-0 bg-[#141414] z-50 flex flex-col items-center justify-center text-center p-4">
      <div className="max-w-md w-full">
        <Clapperboard className="w-16 h-16 text-red-600 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-red-600 tracking-wider uppercase mb-4">
          StreamFlix
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Sign in to access unlimited movies and TV shows.
        </p>
        <Button
          onClick={handleLogin}
          className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-12 py-6 rounded-md w-full"
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}