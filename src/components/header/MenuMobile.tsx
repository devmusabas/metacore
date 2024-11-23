'use client';

import { useState } from 'react';
import Link from 'next/link';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { getObjectKeys } from '@/utils/object';
import { menuItems } from '@/data/menuItems';
import { cn } from '@/lib/utils';

interface MenuMobileProps {
  menuMobileOpen: boolean;
  handleMenuMobileClick: () => void;
}

const MenuMobile: React.FC<MenuMobileProps> = ({
  menuMobileOpen,
  handleMenuMobileClick,
}) => {
  const [openMenuItem, setOpenMenuItem] = useState<string>('');

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 transform bg-white p-4 transition-transform duration-300 ease-in-out',
        menuMobileOpen ? 'translate-x-0' : 'translate-x-full'
      )}
    >
      <div className="h-full overflow-y-auto px-4 pt-20">
        <Accordion
          type="single"
          collapsible
          value={openMenuItem}
          onValueChange={setOpenMenuItem}
        >
          {getObjectKeys(menuItems).map((key) =>
            menuItems[key].submenu ? (
              <AccordionItem key={key} value={key}>
                <AccordionTrigger className="text-lg font-medium">
                  {menuItems[key].title}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="ml-4 space-y-2 pb-3">
                    {getObjectKeys(menuItems[key].submenu).map((subKey) => (
                      <Link
                        key={subKey}
                        href={menuItems[key].submenu?.[subKey]?.href || '#'}
                        onClick={handleMenuMobileClick}
                        className="block py-2 text-sm text-gray-600 hover:text-metacore-primary"
                      >
                        {menuItems[key].submenu?.[subKey]?.title}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ) : (
              <Link
                key={key}
                href={menuItems[key].href || '#'}
                onClick={handleMenuMobileClick}
                className="block border-b border-gray-100 py-3 text-lg font-medium"
              >
                {menuItems[key].title}
              </Link>
            )
          )}
        </Accordion>
      </div>
    </div>
  );
};

export default MenuMobile;
