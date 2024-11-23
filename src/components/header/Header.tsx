'use client';

import { useState } from 'react';
import { MenuIcon } from 'lucide-react';
// import type { User } from '@supabase/supabase-js';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { getObjectKeys } from '@/utils/object';
import { menuItems } from '@/data/menuItems';
// import { Button } from '@/components/ui/button';
// import { supabase } from '@/utils/supabase/client';
import { cn } from '@/lib/utils';

import Menu from './Menu';
import MenuMobile from './MenuMobile';

import { Button } from '../ui/button';

const Header = (): JSX.Element => {
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);
  const [menuMobileOpen, setMenuMobileOpen] = useState<boolean>(false);
  const { push } = useRouter();
  //   const [user, setUser] = useState<User | null>(null);

  //   useEffect(() => {
  //     const fetchUser = async (): Promise<void> => {
  //       const {
  //         data: { user },
  //       } = await supabase.auth.getUser();
  //       setUser(user);
  //     };
  //     fetchUser();
  //   }, []);

  const handleMenuClick = (title: string): void => {
    if (title === 'contact') return push('/contact');
    setActiveMenuItem(activeMenuItem === title ? null : title);
  };

  const handleMenuMobileClick = (): void => {
    setMenuMobileOpen(!menuMobileOpen);
  };

  const handleBackdropClick = (): void => {
    setActiveMenuItem(null);
    setMenuMobileOpen(false);
  };

  //   const handleLogout = async (): Promise<void> => {
  //     try {
  //       const response = await fetch('/api/auth/logout', {
  //         method: 'POST',
  //       });
  //       if (response.ok) {
  //         setUser(null);
  //       } else {
  //         // console.error('Failed to log out');
  //       }
  //     } catch (error) {
  //       //   console.error('An error occurred during logout:', error);
  //     }
  //   };

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-black/80 transition-opacity duration-700 ease-in-out',
          activeMenuItem ? 'opacity-100' : 'opacity-0'
        )}
        onClick={handleBackdropClick}
      />

      <div className="fixed inset-x-0 top-0 z-[51] mx-auto flex max-w-[1663px] justify-between shadow-sm shadow-[#f03f2b]/30">
        <header className="justiyf-between relative z-[51] h-[73px] w-full bg-white shadow">
          <nav className="h-full w-full justify-between px-8">
            <div className="flex h-full w-full items-center justify-between">
              <Link href="/" className="relative min-h-[45px] min-w-[180px]">
                <Image
                  src="/metacore-logo.svg"
                  alt="MetaCORE Education"
                  fill
                  className="object-contain pr-4"
                />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="md:invisible"
                onClick={handleMenuMobileClick}
              >
                <MenuIcon size={20} />
              </Button>
              <ul className="hidden h-full items-center space-x-6 md:flex">
                {getObjectKeys(menuItems).map((item) => (
                  <li key={menuItems[item].title} className="h-full">
                    <button
                      onClick={() => handleMenuClick(item)}
                      className={cn(
                        'h-full px-2 font-bold transition-colors duration-200 ease-in-out',
                        activeMenuItem === item
                          ? 'text-metacore-primary'
                          : 'text-gray-700 hover:text-metacore-primary'
                      )}
                    >
                      {menuItems[item].title}
                    </button>
                  </li>
                ))}
                {/* {user ? (
                  <>
                    <li className="h-full flex items-center">
                      <Link href="/dashboard">
                      <Button
                          variant="link"
                          className="font-bold text-gray-700 hover:text-metacore-secondary transition-colors duration-200 ease-in-out"
                        >
                        Dashboard
                        </Button>
                        </Link>
                        </li>
                    <li className="h-full flex items-center">
                      <Button
                        onClick={handleLogout}
                        variant="link"
                        className="font-bold text-gray-700 hover:text-metacore-secondary transition-colors duration-200 ease-in-out"
                      >
                        Logout
                      </Button>
                    </li>
                  </>
                  ) : (
                  <li className="h-full flex items-center">
                    <Link href="/login">
                      <Button
                        variant="link"
                        className="font-bold text-gray-700 hover:text-metacore-secondary transition-colors duration-200 ease-in-out"
                      >
                        Login
                        </Button>
                    </Link>
                  </li>
                  )} */}
              </ul>
            </div>
          </nav>
        </header>
        <Menu
          activeMenuItem={activeMenuItem}
          setActiveMenuItem={setActiveMenuItem}
        />
        <MenuMobile {...{ menuMobileOpen, handleMenuMobileClick }} />
      </div>
    </>
  );
};

export default Header;
