import React from 'react';
import { Plus } from 'lucide-react';
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  roast: 'Light' | 'Medium' | 'Dark';
  notes: string[];
}
interface CatalogProps {
  onAddToCart: (product: any) => void;
}
export function Catalog({ onAddToCart }: CatalogProps) {
  const products: Product[] = [
  {
    id: '1',
    name: 'Midnight Blend',
    price: 18.0,
    image:
    'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80',
    roast: 'Dark',
    notes: ['Chocolate', 'Smoke', 'Earth']
  },
  {
    id: '2',
    name: 'Ethiopia Yirgacheffe',
    price: 22.0,
    image:
    'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&q=80',
    roast: 'Light',
    notes: ['Blueberry', 'Jasmine', 'Honey']
  },
  {
    id: '3',
    name: 'Colombia Huila',
    price: 20.0,
    image:
    'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80',
    roast: 'Medium',
    notes: ['Caramel', 'Citrus', 'Nut']
  },
  {
    id: '4',
    name: 'Espresso Roast',
    price: 19.0,
    image:
    'https://images.unsplash.com/photo-1610632380989-680fe40816c6?w=800&q=80',
    roast: 'Dark',
    notes: ['Molasses', 'Spice', 'Cream']
  },
  {
    id: '5',
    name: 'Decaf Night',
    price: 19.0,
    image:
    'https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=800&q=80',
    roast: 'Medium',
    notes: ['Cocoa', 'Malt', 'Smooth']
  },
  {
    id: '6',
    name: 'Cold Brew Packs',
    price: 24.0,
    image:
    'https://images.unsplash.com/photo-1506377550980-bc826576c3a1?w=800&q=80',
    roast: 'Dark',
    notes: ['Bold', 'Low Acid', 'Sweet']
  }];

  return (
    <div className="min-h-screen bg-white pt-24 px-4 md:px-8 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-4 border-black pb-6">
          <h1 className="font-serif text-6xl md:text-8xl font-black tracking-tighter leading-none">
            THE
            <br />
            GOODS
          </h1>
          <p className="font-mono text-sm md:text-right max-w-xs mt-6 md:mt-0">
            Small batch roasted beans, brewing equipment, and merchandise for
            the discerning coffee lover.
          </p>
        </div>

        {/* Masonry-ish Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {products.map((product) =>
          <div
            key={product.id}
            className="break-inside-avoid group relative border-2 border-black bg-white transition-all hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">

              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden border-b-2 border-black">
                <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />

                <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 font-mono text-xs uppercase tracking-widest">
                  {product.roast} Roast
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif text-2xl font-bold leading-none">
                    {product.name}
                  </h3>
                  <span className="font-mono font-bold text-lg">
                    ${product.price}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {product.notes.map((note, i) =>
                <span
                  key={i}
                  className="text-xs font-mono border border-black px-2 py-0.5 rounded-full uppercase">

                      {note}
                    </span>
                )}
                </div>

                <button
                onClick={() => onAddToCart(product)}
                className="w-full bg-black text-white py-3 font-mono text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">

                  <Plus size={16} />
                  Add to Cart
                </button>
              </div>
            </div>
          )}

          {/* Decorative Filler Block */}
          <div className="break-inside-avoid border-2 border-black p-8 bg-black text-white flex flex-col justify-center items-center text-center aspect-square">
            <h3 className="font-serif text-4xl italic mb-4">
              Subscribe & Save
            </h3>
            <p className="font-mono text-sm mb-6">
              Never run out of beans again. Get 15% off every order.
            </p>
            <button className="border border-white px-6 py-2 font-mono text-xs uppercase hover:bg-white hover:text-black transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>);

}