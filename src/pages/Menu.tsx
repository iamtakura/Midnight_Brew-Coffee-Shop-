import React from 'react';
export function Menu() {
  const categories = [
  {
    title: 'ESPRESSO',
    items: [
    {
      name: 'Doppio',
      price: '4.00',
      desc: 'Double shot, pure & simple'
    },
    {
      name: 'Macchiato',
      price: '4.50',
      desc: 'Espresso marked with foam'
    },
    {
      name: 'Cortado',
      price: '4.75',
      desc: 'Equal parts espresso & milk'
    },
    {
      name: 'Flat White',
      price: '5.00',
      desc: 'Microfoam over double shot'
    },
    {
      name: 'Cappuccino',
      price: '5.00',
      desc: 'Traditional 6oz size'
    },
    {
      name: 'Latte',
      price: '5.50',
      desc: 'Silky milk, double shot'
    }]

  },
  {
    title: 'FILTER',
    items: [
    {
      name: 'House Drip',
      price: '3.50',
      desc: 'Rotating single origin'
    },
    {
      name: 'Pour Over',
      price: '6.00',
      desc: 'Chemex or V60, allow 5 mins'
    },
    {
      name: 'Cold Brew',
      price: '5.00',
      desc: 'Steeped 24hrs, heavy body'
    },
    {
      name: 'Kyoto Style',
      price: '6.00',
      desc: 'Slow drip, whiskey notes'
    }]

  },
  {
    title: 'NOT COFFEE',
    items: [
    {
      name: 'Matcha Latte',
      price: '6.00',
      desc: 'Ceremonial grade, unsweetened'
    },
    {
      name: 'Chai Latte',
      price: '5.50',
      desc: 'House spice blend, spicy'
    },
    {
      name: 'London Fog',
      price: '5.00',
      desc: 'Earl grey, vanilla, milk'
    },
    {
      name: 'Hot Chocolate',
      price: '4.50',
      desc: '70% dark chocolate'
    }]

  }];

  return (
    <div className="min-h-screen bg-[#f5f0e8] pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-black text-white p-8 md:p-12 text-center border-b-8 border-double border-white">
          <h1 className="font-serif text-6xl md:text-8xl font-black tracking-tighter mb-4">
            MENU
          </h1>
          <p className="font-mono text-sm tracking-[0.5em] uppercase">
            Midnight Brew • Vol. 12
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black border-b border-black">
          {categories.map((category, idx) =>
          <div key={idx} className="p-8 relative">
              <h2 className="font-serif text-4xl font-bold mb-8 border-b-4 border-black inline-block pb-1">
                {category.title}
              </h2>

              <ul className="space-y-8">
                {category.items.map((item, itemIdx) =>
              <li key={itemIdx} className="group">
                    <div className="flex justify-between items-baseline mb-1 border-b border-dotted border-gray-400 pb-1">
                      <span className="font-serif text-xl font-bold group-hover:translate-x-1 transition-transform">
                        {item.name}
                      </span>
                      <span className="font-mono font-bold">${item.price}</span>
                    </div>
                    <p className="font-mono text-xs text-gray-500 uppercase tracking-wide">
                      {item.desc}
                    </p>
                  </li>
              )}
              </ul>

              {/* Decorative Number */}
              <div className="absolute top-4 right-4 font-serif text-9xl opacity-5 pointer-events-none select-none">
                0{idx + 1}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-black text-white p-4 text-center font-mono text-xs uppercase tracking-widest">
          Oat milk +$1.00 • Almond milk +$1.00 • Extra shot +$2.00
        </div>
      </div>
    </div>);

}