import React from 'react';
import { ShoppingBag, Menu, Search } from 'lucide-react';

export default function Navbar({ cartCount }: { cartCount: number }) {
  return (
    <nav className="bg-amber-50 border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-amber-900 mr-4 cursor-pointer" />
            <h1 className="text-2xl font-serif text-amber-900">Timeless Treasures</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Search className="h-6 w-6 text-amber-900 cursor-pointer" />
            <div className="relative">
              <ShoppingBag className="h-6 w-6 text-amber-900 cursor-pointer" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}