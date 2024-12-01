import React from 'react';

interface ProductProps {
  image: string;
  name: string;
  price: number;
  era: string;
  onAddToCart: () => void;
}

export default function ProductCard({ image, name, price, era, onAddToCart }: ProductProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-105">
      <img src={image} alt={name} className="w-full h-80 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-amber-900">{name}</h3>
        <p className="text-sm text-amber-700 mb-2">{era}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-amber-900">${price}</span>
          <button
            onClick={onAddToCart}
            className="bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-900 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}