import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Clapperboard, Home, Tv, Film, Plus, LogOut, User as UserIcon, Loader2 } from 'lucide-react';
import { User } from '@/entities/User';
import LoginPrompt from '@/components/auth/LoginPrompt';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navLinks = [
  { name: 'Home', href: createPageUrl('Home'), icon: Home },
  { name: 'TV Shows', href: '#', icon: Tv },
  { name: 'Movies', href: '#', icon: Film },
  { name: 'My List', href: '#', icon: Plus },
];

export default function Layout({ children }) {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      try {
        const userData = await User.me();
        setUser(userData);
      } catch (error) {
        setUser(null);
      } finally {
        setIsAuthLoading(false);
      }
    }
    checkAuth();
  }, [location.pathname]);

  const handleLogout = async () => {
    await User.logout();
    window.location.reload();
  };

  if (isAuthLoading) {
    return (
      <div className="bg-[#141414] min-h-screen flex items-center justify-center text-white">
        <Loader2 className="w-12 h-12 animate-spin text-red-600" />
      </div>
    );
  }

  if (!user) {
    return <LoginPrompt />;
  }

  return (
    <div className="bg-[#141414] text-white min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-gradient-to-b from-black/80 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center space-x-8">
              <Link to={createPageUrl('Home')} className="flex-shrink-0">
                <h1 className="text-2xl md:text-3xl font-bold text-red-600 tracking-wider uppercase">
                  StreamFlix
                </h1>
              </Link>
              <nav className="hidden md:flex items-center space-x-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-sm font-medium transition-colors ${
                      location.pathname === link.href
                        ? 'text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
            {/* User Profile Dropdown */}
            <div className="hidden md:block">
               <DropdownMenu>
                <DropdownMenuTrigger asChild>
                   <div className="w-10 h-10 bg-gray-700 rounded-md cursor-pointer flex items-center justify-center">
                     <UserIcon className="w-6 h-6 text-white"/>
                   </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#141414] text-white border-gray-700">
                  <DropdownMenuLabel>{user.full_name}</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-gray-700"/>
                  <DropdownMenuItem onSelect={handleLogout} className="cursor-pointer focus:bg-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sign Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      <main>{children}</main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#141414] border-t border-gray-800 z-50">
        <div className="flex justify-around items-center h-16">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
                location.pathname === link.href
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <link.icon className="w-6 h-6" />
              <span className="text-xs">{link.name}</span>
            </Link>
          ))}
        </div>
      </nav>
      <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-12 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} StreamFlix. All rights reserved.</p>
      </footer>
    </div>
  );
}
