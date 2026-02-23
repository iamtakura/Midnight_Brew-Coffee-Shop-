import React from 'react';
import { Printer, CreditCard, ChevronLeft } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';

// Use environment variable for the publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

interface CheckoutPageProps {
    cartItems: CartItem[];
    onBack: () => void;
    onClearCart: () => void;
}

export function CheckoutPage({ cartItems, onBack, onClearCart }: CheckoutPageProps) {
    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    const handlePrint = () => {
        window.print();
    };

    const handlePayment = async () => {
        const stripe = await stripePromise;
        const apiUrl = import.meta.env.VITE_API_URL;

        console.log('API URL:', apiUrl);
        console.log('Cart Items:', cartItems);

        if (!stripe) {
            console.error('Stripe failed to load. Check your VITE_STRIPE_PUBLISHABLE_KEY.');
            alert('Stripe failing to load. Check console for details.');
            return;
        }

        try {
            console.log('Fetching session from:', `${apiUrl}/create-checkout-session`);
            const response = await fetch(`${apiUrl}/create-checkout-session`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ items: cartItems }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Server responded with error:', errorText);
                throw new Error(`Server error: ${response.status}`);
            }

            const session = await response.json();
            console.log('Received session:', session);

            if (session.error) {
                throw new Error(session.error);
            }

            if (session.url) {
                console.log('Redirecting to Stripe URL:', session.url);
                window.location.href = session.url;
            } else {
                // Fallback to ID redirect if URL is missing for some reason
                console.log('Redirecting to checkout with session ID:', session.id);
                const result = await stripe.redirectToCheckout({
                    sessionId: session.id,
                });

                if (result.error) {
                    console.error('Stripe redirect error:', result.error);
                    alert(result.error.message);
                }
            }
        } catch (error) {
            console.error('Error initiating payment:', error);
            alert('Failed to initiate payment. Is the backend server running? Check your browser console for details.');
        }
    };

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen pt-24 pb-16 px-4 flex flex-col items-center justify-center bg-[#f5f0e8]">
                <h2 className="font-serif text-4xl mb-4">Your cart is empty</h2>
                <button
                    onClick={onBack}
                    className="bg-black text-white px-8 py-3 font-mono text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors"
                >
                    Go Back Shopping
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f5f0e8] pt-24 pb-16 px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
                {/* Navigation / Back Button */}
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest mb-8 hover:text-gray-600 transition-colors group"
                >
                    <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Shop
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Receipt Section */}
                    <div className="bg-white p-8 shadow-2xl border border-gray-200 print:shadow-none print:border-none print:p-0" id="receipt">
                        <div className="text-center mb-8 border-b-2 border-black border-dashed pb-8">
                            <h1 className="font-serif text-4xl font-black italic tracking-tighter mb-2">MIDNIGHT BREW</h1>
                            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">Official Receipt • Brooklyn, NY</p>
                            <div className="mt-4 font-mono text-[10px] text-gray-400">
                                TRANS #849201 • {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
                            </div>
                        </div>

                        <div className="font-mono text-sm space-y-6 mb-8">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex justify-between items-start">
                                    <div className="flex-1 pr-4">
                                        <div className="font-bold uppercase">{item.name}</div>
                                        <div className="text-[10px] text-gray-500">QTY: {item.quantity} @ ${item.price.toFixed(2)}</div>
                                    </div>
                                    <div className="font-bold">${(item.price * item.quantity).toFixed(2)}</div>
                                </div>
                            ))}
                        </div>

                        <div className="border-t-2 border-black border-dashed pt-8 font-mono space-y-2 mb-8">
                            <div className="flex justify-between text-xs">
                                <span>SUBTOTAL</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-xs text-gray-500">
                                <span>TAX (8%)</span>
                                <span>${tax.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-xl font-bold pt-4 border-t border-black mt-4">
                                <span>TOTAL</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="font-serif italic text-sm mb-4">"Brewed for the night owls."</div>
                            <div className="flex justify-center gap-2 opacity-20">
                                {[...Array(20)].map((_, i) => (
                                    <div key={i} className="w-1 h-4 bg-black"></div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Actions Section */}
                    <div className="space-y-6 sticky top-24 print:hidden">
                        <div className="bg-black text-white p-8">
                            <h2 className="font-serif text-3xl mb-6">CHECKOUT</h2>
                            <p className="font-mono text-xs text-gray-400 mb-8 leading-relaxed">
                                Review your order details. Once you click proceed, you will be redirected to our secure Stripe payment gateway to complete your transaction.
                            </p>

                            <div className="space-y-4">
                                <button
                                    onClick={handlePayment}
                                    className="w-full bg-white text-black py-4 font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center gap-3"
                                >
                                    <CreditCard size={18} />
                                    Proceed to Payment
                                </button>

                                <button
                                    onClick={handlePrint}
                                    className="w-full border border-white/30 text-white/70 py-4 font-bold uppercase tracking-widest hover:bg-white/10 hover:text-white transition-colors flex items-center justify-center gap-3"
                                >
                                    <Printer size={18} />
                                    Print Receipt
                                </button>
                            </div>
                        </div>

                        <div className="border-2 border-black p-6 bg-white">
                            <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Secure Checkout</h3>
                            <div className="flex gap-4 grayscale opacity-50">
                                <div className="text-[10px] font-bold border border-black px-2 py-1">VISA</div>
                                <div className="text-[10px] font-bold border border-black px-2 py-1">MASTERCARD</div>
                                <div className="text-[10px] font-bold border border-black px-2 py-1">AMEX</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @media print {
          body * {
            visibility: hidden;
          }
          #receipt, #receipt * {
            visibility: visible;
          }
          #receipt {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
      `}} />
        </div>
    );
}
