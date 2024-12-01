import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import CheckoutForm from './components/CheckoutForm';
import { ShoppingBag } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "1950s Swing Dress",
    price: 189.99,
    era: "1950s",
    image: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&q=80&w=800&h=1000"
  },
  {
    id: 2,
    name: "Classic Leather Jacket",
    price: 249.99,
    era: "1960s",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800&h=1000"
  },
  {
    id: 3,
    name: "Vintage Denim Overall",
    price: 145.99,
    era: "1970s",
    image: "https://images.unsplash.com/photo-1548624149-f9461c6b0b11?auto=format&fit=crop&q=80&w=800&h=1000"
  },
  {
    id: 4,
    name: "Retro Floral Blouse",
    price: 89.99,
    era: "1960s",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800&h=1000"
  },
  {
    id: 5,
    name: "Classic Wool Coat",
    price: 299.99,
    era: "1950s",
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&q=80&w=800&h=1000"
  },
  {
    id: 6,
    name: "Vintage Evening Gown",
    price: 399.99,
    era: "1940s",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=800&h=1000"
  }
];

function App() {
  const [cart, setCart] = useState<number[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);

  const addToCart = (productId: number) => {
    setCart([...cart, productId]);
  };

  const total = cart.reduce((sum, productId) => {
    const product = products.find(p => p.id === productId);
    return sum + (product?.price || 0);
  }, 0);

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar cartCount={cart.length} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-amber-900 mb-4">Timeless Treasures</h2>
          <p className="text-amber-800 max-w-2xl mx-auto">
            Discover our carefully curated collection of authentic vintage clothing from the 1940s-1970s.
            Each piece tells a unique story and brings a touch of nostalgia to your wardrobe.
          </p>
        </div>

        {cart.length > 0 && (
          <div className="mb-8 bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <ShoppingBag className="h-5 w-5 text-amber-900 mr-2" />
                <span className="text-amber-900">
                  {cart.length} item{cart.length !== 1 ? 's' : ''} in cart
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-lg font-semibold text-amber-900">
                  Total: ${total.toFixed(2)}
                </span>
                <button
                  onClick={() => setShowCheckout(true)}
                  className="bg-amber-800 text-white px-6 py-2 rounded hover:bg-amber-900 transition-colors"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={() => addToCart(product.id)}
            />
          ))}
        </div>
      </main>

      {showCheckout && (
        <CheckoutForm
          onClose={() => setShowCheckout(false)}
          total={total}
        />
      )}
    </div>
  );
}

export default App;