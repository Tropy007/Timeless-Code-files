import React, { useState } from 'react';
import { CreditCard, Lock } from 'lucide-react';

interface CheckoutFormProps {
  onClose: () => void;
  total: number;
}

export default function CheckoutForm({ onClose, total }: CheckoutFormProps) {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    name: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, handle payment processing here
    alert('Payment processed successfully!');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-serif text-amber-900">Secure Checkout</h2>
          <Lock className="h-5 w-5 text-amber-900" />
        </div>
        
        <div className="mb-4">
          <p className="text-lg font-semibold text-amber-900">Total: ${total.toFixed(2)}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-amber-900 mb-1">Card Number</label>
            <div className="relative">
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full px-4 py-2 border border-amber-200 rounded focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                value={formData.cardNumber}
                onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                maxLength={19}
              />
              <CreditCard className="absolute right-3 top-2.5 h-5 w-5 text-amber-900" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-amber-900 mb-1">Expiry Date</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full px-4 py-2 border border-amber-200 rounded focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                value={formData.expiry}
                onChange={(e) => setFormData({...formData, expiry: e.target.value})}
                maxLength={5}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-amber-900 mb-1">CVV</label>
              <input
                type="text"
                placeholder="123"
                className="w-full px-4 py-2 border border-amber-200 rounded focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                value={formData.cvv}
                onChange={(e) => setFormData({...formData, cvv: e.target.value})}
                maxLength={3}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-amber-900 mb-1">Cardholder Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-amber-200 rounded focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              className="flex-1 bg-amber-800 text-white py-2 rounded hover:bg-amber-900 transition-colors"
            >
              Pay ${total.toFixed(2)}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-amber-800 text-amber-800 py-2 rounded hover:bg-amber-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}