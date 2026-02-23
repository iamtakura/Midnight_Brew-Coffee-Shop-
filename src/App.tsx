import React, { useEffect, useState } from 'react';
import { Nav } from './components/Nav';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Catalog } from './pages/Catalog';
import { CheckoutPage } from './pages/CheckoutPage';
import { CheckoutModal } from './components/CheckoutModal';
// Simple cart types
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}
export function App() {
  const [activePage, setActivePage] = useState('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);
  const handleAddToCart = (product: any) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ?
            {
              ...item,
              quantity: item.quantity + 1
            } :
            item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1
        }];

    });
    setIsCartOpen(true);
  };
  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      <Nav
        activePage={activePage}
        onNavigate={setActivePage}
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)} />


      <main>
        {activePage === 'home' && <Home onNavigate={setActivePage} />}
        {activePage === 'menu' && <Menu />}
        {activePage === 'catalog' && <Catalog onAddToCart={handleAddToCart} />}
        {activePage === 'checkout' && (
          <CheckoutPage
            cartItems={cartItems}
            onBack={() => setActivePage('catalog')}
            onClearCart={() => setCartItems([])}
          />
        )}
      </main>

      <CheckoutModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={() => setActivePage('checkout')} />


      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 border-t border-white/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-serif text-3xl font-bold mb-4">
              MIDNIGHT BREW
            </h2>
            <p className="font-mono text-xs text-gray-400 max-w-xs">
              © 2024 Midnight Brew Co.
              <br />
              All rights reserved. Designed in the dark.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-sm font-bold uppercase mb-4 text-gray-400">
              Social
            </h3>
            <ul className="space-y-2 font-mono text-sm">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Spotify
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-sm font-bold uppercase mb-4 text-gray-400">
              Legal
            </h3>
            <ul className="space-y-2 font-mono text-sm">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Shipping
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>);

}