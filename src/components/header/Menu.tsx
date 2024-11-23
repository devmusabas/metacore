'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';

import { getObjectKeys } from '@/utils/object';
import { menuItems } from '@/data/menuItems';
import { cn } from '@/lib/utils';
import type { MenuItem } from '@/types/menu';

import { Button } from '../ui/button';

interface MenuProps {
  activeMenuItem: string | null;
  setActiveMenuItem: (menu: string | null) => void;
}

const Menu: FC<MenuProps> = ({ activeMenuItem, setActiveMenuItem }) => {
  const [hoveredItems, setHoveredItems] = useState<{
    subMenuItem: null | string;
    subMenuChild: null | string;
  }>({ subMenuItem: null, subMenuChild: null });
  const handleMouseEnter = (item: string, depth: number): void => {
    const newHoveredChild = { subMenuChild: depth === 0 ? null : item };
    const newHoveredSubmenuItem = {
      subMenuItem: depth === 0 ? item : hoveredItems.subMenuItem,
    };
    setHoveredItems({ ...newHoveredChild, ...newHoveredSubmenuItem });
  };

  const handleMouseLeave = (): void => {
    setHoveredItems({ subMenuItem: null, subMenuChild: null });
  };
  const renderSubmenuItems = (
    items: Record<string, MenuItem> = {},
    depth: number = 0
  ): JSX.Element => {
    return (
      <ul
        className={cn(
          'flex flex-col space-y-1',
          depth === 0 ? 'w-[240px]' : 'w-full'
        )}
      >
        <>
          {getObjectKeys(items).map((item) => (
            <li
              key={item}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item, depth)}
            >
              {items[item].submenu ? (
                <div className="flex items-center">
                  <button
                    className={cn(
                      'relative flex w-full items-center justify-between overflow-hidden rounded-md px-3 py-1.5 pl-4 text-left text-sm transition-colors duration-200 ease-in-out',
                      Object.values(hoveredItems).includes(item)
                        ? 'bg-metacore-secondary/10 text-metacore-secondary'
                        : 'text-gray-700 hover:bg-metacore-secondary/10 hover:text-metacore-secondary'
                    )}
                  >
                    <div
                      className={cn(
                        'absolute left-0 h-full w-1 transition-colors',
                        Object.values(hoveredItems).includes(item)
                          ? 'bg-metacore-primary'
                          : 'bg-metacore-secondary/10'
                      )}
                    />
                    <span>{items[item].title}</span>
                    <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <Link
                  href={items[item].href ?? '#'}
                  className={cn(
                    'block w-full rounded-md px-3 py-1.5 pl-4 text-left text-sm transition-all duration-200 ease-in-out',
                    'text-gray-700 hover:bg-metacore-secondary/10 hover:text-metacore-secondary'
                  )}
                  onClick={() => setActiveMenuItem(null)}
                >
                  {items[item].title}
                </Link>
              )}
            </li>
          ))}
          <li onMouseEnter={handleMouseLeave} className="h-full"></li>
        </>
      </ul>
    );
  };

  return (
    <div
      className={cn(
        'absolute top-0 z-[20] w-full transform overflow-y-auto bg-white shadow-md transition-all duration-700 ease-in-out',
        activeMenuItem
          ? 'visible translate-y-[73px] opacity-100'
          : '-translate-y-full'
      )}
    >
      <Button
        onClick={() => setActiveMenuItem(null)}
        className="absolute right-4 top-4"
        aria-label="Close menu"
        size="icon-sm"
        variant="ghost"
      >
        <X />
      </Button>
      <div className="mx-auto px-16 py-6">
        <div
          className="flex w-min flex-row gap-0.5"
          onMouseLeave={handleMouseLeave}
        >
          {activeMenuItem &&
            renderSubmenuItems(menuItems[activeMenuItem].submenu ?? {})}
          {activeMenuItem && hoveredItems.subMenuItem && (
            <div className={cn('ml-[2px] min-w-[240px]', 'z-20')}>
              {renderSubmenuItems(
                menuItems[activeMenuItem].submenu?.[hoveredItems.subMenuItem]
                  ?.submenu ?? {},
                1
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
