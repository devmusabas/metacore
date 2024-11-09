'use client';

import { useEffect, useState } from 'react';
// import type { User } from '@supabase/supabase-js';
import Image from 'next/image';
import Link from 'next/link';

// import { Button } from '@/components/ui/button';
// import { supabase } from '@/utils/supabase/client';
import { cn } from '@/lib/utils';

import { menuItems } from '../data/menuItems';
import type { MenuItem } from '../types/menu';

const Header = (): JSX.Element => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [hoveredItems, setHoveredItems] = useState<string[]>([]);
  const [showSubmenu, setShowSubmenu] = useState<string | null>(null);
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

  useEffect(() => {
    if (activeMenu) {
      setShowSubmenu(activeMenu);
    } else {
      const timer = setTimeout(() => {
        setShowSubmenu(null);
      }, 300);
      return (): void => clearTimeout(timer);
    }
  }, [activeMenu]);

  const handleMenuClick = (title: string): void => {
    setActiveMenu(activeMenu === title ? null : title);
  };

  const handleBackdropClick = (): void => {
    setActiveMenu(null);
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

  const handleMouseEnter = (title: string): void => {
    setHoveredItems((prev) => [...prev, title]);
  };

  const handleMouseLeave = (title: string): void => {
    setHoveredItems((prev) => prev.filter((item) => item !== title));
  };

  const renderSubmenuItems = (
    items: MenuItem[],
    depth: number = 0
  ): JSX.Element => {
    return (
      <ul
        className={cn(
          'flex flex-col space-y-1',
          depth === 0 ? 'w-[240px]' : 'w-full'
        )}
      >
        {items.map((item) => (
          <li
            key={item.title}
            className="group relative"
            onMouseEnter={() => handleMouseEnter(item.title)}
            onMouseLeave={() => handleMouseLeave(item.title)}
          >
            {item.submenu ? (
              <div className="flex items-center">
                <div
                  className={cn(
                    'absolute left-0 h-full w-1 rounded-r-md transition-colors',
                    hoveredItems.includes(item.title)
                      ? 'bg-metacore-primary'
                      : 'bg-metacore-secondary/10'
                  )}
                />
                <button
                  className={cn(
                    'flex w-full items-center justify-between p-3 pl-4 text-left transition-colors duration-200 ease-in-out',
                    hoveredItems.includes(item.title)
                      ? 'bg-metacore-secondary/10 text-metacore-secondary'
                      : 'text-gray-700 hover:bg-metacore-secondary/10 hover:text-metacore-secondary'
                  )}
                >
                  <span>{item.title}</span>
                  <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
                    />
                  </svg>
                </button>

                {/* Nested Submenu */}
                {hoveredItems.includes(item.title) && item.submenu && (
                  <div
                    className={cn(
                      'absolute left-full top-0 ml-[2px] min-w-[240px]',
                      'rounded-md border border-metacore-primary/10 bg-white shadow-lg',
                      'opacity-0 transition-opacity duration-200 group-hover:opacity-100',
                      depth === 0 ? 'z-10' : 'z-20'
                    )}
                  >
                    {renderSubmenuItems(item.submenu, depth + 1)}
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={item.href || '#'}
                className={cn(
                  'block w-full rounded-md p-3 pl-4 text-left transition-all duration-200 ease-in-out',
                  'text-gray-700 hover:bg-metacore-secondary/10 hover:text-metacore-secondary'
                )}
                onClick={() => setActiveMenu(null)}
              >
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      {/* Backdrop */}
      {activeMenu && (
        <div
          className="ease fixed inset-0 z-10 bg-black/20 transition-opacity duration-300"
          onClick={handleBackdropClick}
        />
      )}

      <div className="relative">
        {/* Main Header */}
        <header className="relative z-30 h-[73px] bg-white shadow">
          <nav className="container mx-auto h-full px-4">
            <div className="flex h-full items-center justify-between">
              <Link href="/" className="relative min-h-[45px] min-w-[180px]">
                <Image
                  src="/metacore-logo.svg"
                  alt="MetaCORE Education"
                  fill
                  className="object-contain pr-4"
                />
              </Link>
              <ul className="hidden h-full items-center space-x-6 md:flex">
                {menuItems.map((item) => (
                  <li key={item.title} className="h-full">
                    <button
                      onClick={() => handleMenuClick(item.title)}
                      className={cn(
                        'h-full px-2 font-bold transition-colors duration-200 ease-in-out',
                        activeMenu === item.title
                          ? 'border-b-2 border-metacore-primary text-metacore-primary'
                          : 'text-gray-700 hover:text-metacore-primary'
                      )}
                    >
                      {item.title}
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

        {/* Header Extension */}
        <div
          className={cn(
            'absolute z-20 w-full bg-white shadow-md transition-all duration-700 ease-in-out',
            'top-0 transform',
            activeMenu
              ? 'visible translate-y-[73px] opacity-100'
              : '-translate-y-full'
          )}
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex">
              {showSubmenu &&
                menuItems.find((item) => item.title === showSubmenu)?.submenu &&
                renderSubmenuItems(
                  menuItems.find((item) => item.title === showSubmenu)
                    ?.submenu || []
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
