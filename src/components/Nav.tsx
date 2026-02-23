import React, { useState } from 'react';
import { ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';
interface NavProps {
  activePage: string;
  onNavigate: (page: string) => void;
  cartCount: number;
  onCartClick: () => void;
}
export function Nav({
  activePage,
  onNavigate,
  cartCount,
  onCartClick
}: NavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = [
  {
    name: 'HOME',
    id: 'home'
  },
  {
    name: 'MENU',
    id: 'menu'
  },
  {
    name: 'CATALOG',
    id: 'catalog'
  }];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => onNavigate('home')}>

            <h1 className="font-serif text-2xl tracking-tighter italic font-bold">
              MIDNIGHT BREW
            </h1>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`text-sm font-mono tracking-widest hover:text-gray-300 transition-colors ${activePage === link.id ? 'border-b-2 border-white pb-1' : ''}`}>

                {link.name}
              </button>
            )}

            <button
              onClick={onCartClick}
              className="relative p-2 hover:bg-white/10 transition-colors group"
              aria-label="Open cart">

              <ShoppingBag size={20} />
              {cartCount > 0 &&
              <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-bold h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              }
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={onCartClick} className="mr-4 relative p-2">
              <ShoppingBag size={20} />
              {cartCount > 0 &&
              <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-bold h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              }
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2">

              {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen &&
      <div className="md:hidden bg-black border-t border-white/10 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) =>
          <button
            key={link.id}
            onClick={() => {
              onNavigate(link.id);
              setMobileMenuOpen(false);
            }}
            className={`block w-full text-left px-3 py-4 text-base font-mono tracking-widest hover:bg-white/10 ${activePage === link.id ? 'bg-white/5' : ''}`}>

                {link.name}
              </button>
          )}
          </div>
        </div>
      }
    </nav>);

}