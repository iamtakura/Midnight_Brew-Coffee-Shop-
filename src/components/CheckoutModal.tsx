import React from 'react';
import { X, Trash2 } from 'lucide-react';
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}
interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}
export function CheckoutModal({
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
  onCheckout
}: CheckoutModalProps) {
  const [isSuccess, setIsSuccess] = React.useState(false);

  if (!isOpen) {
    if (isSuccess) setIsSuccess(false);
    return null;
  }

  const handleCheckout = () => {
    setIsSuccess(true);
    setTimeout(() => {
      onCheckout();
      onClose();
    }, 2000);
  };
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.08;
  const total = subtotal + tax;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose} />


      {/* Modal Content - Receipt Style */}
      <div className="relative bg-[#f5f0e8] w-full max-w-md shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 border-b-2 border-black border-dashed flex justify-between items-start">
          <div>
            <h2 className="font-serif text-3xl font-bold text-black leading-none mb-2">
              RECEIPT
            </h2>
            <p className="font-mono text-xs text-gray-600 uppercase tracking-widest">
              Midnight Brew Co.
            </p>
            <p className="font-mono text-xs text-gray-600">
              {new Date().toLocaleDateString()}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-black hover:text-white transition-colors border border-transparent hover:border-black rounded-full">

            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 font-mono">
          {cartItems.length === 0 ?
            <div className="text-center py-12 border-2 border-black border-dotted">
              <p className="text-lg uppercase">Your cart is empty</p>
              <p className="text-sm text-gray-500 mt-2">
                Go add some caffeine.
              </p>
            </div> :

            <ul className="space-y-6">
              {cartItems.map((item) =>
                <li
                  key={item.id}
                  className="flex justify-between items-start group">

                  <div className="flex-1 pr-4">
                    <h3 className="font-bold uppercase text-sm">{item.name}</h3>
                    <p className="text-xs text-gray-500">
                      Qty: {item.quantity} @ ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-sm">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-gray-400 hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100"
                      aria-label="Remove item">

                      <Trash2 size={16} />
                    </button>
                  </div>
                </li>
              )}
            </ul>
          }
        </div>

        {/* Footer / Totals */}
        <div className="p-6 bg-white border-t-2 border-black border-dashed font-mono">
          <div className="space-y-2 mb-6 text-sm">
            <div className="flex justify-between">
              <span>SUBTOTAL</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>TAX (8%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xl font-bold border-t-2 border-black pt-2 mt-2">
              <span>TOTAL</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          {isSuccess ?
            <div className="bg-black text-white py-4 font-bold uppercase tracking-widest text-center animate-pulse">
              SUCCESS! BREWING...
            </div> :

            <button
              onClick={handleCheckout}
              disabled={cartItems.length === 0}
              className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">

              <span>Review & Checkout</span>
            </button>
          }

          <div className="mt-4 text-center">
            <p className="text-[10px] uppercase text-gray-400">
              Thank you for your business
            </p>
            <div className="w-full h-px bg-black mt-2"></div>
            <div className="w-full h-px bg-black mt-1"></div>
          </div>
        </div>
      </div>
    </div>);

}