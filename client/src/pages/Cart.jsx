import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart, updateQty } from '../redux/slices/cartSlice.js';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../utils/currency.js';

const Cart = () => {
  const { items } = useSelector((s) => s.cart);
  const dispatch = useDispatch();
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-4">
      <h2 className="text-xl font-semibold">Cart</h2>
      {!items.length && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-[#edf5ef]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#1f7a4d]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.887-7.143a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-[#153a2b]">Your cart is empty</h3>
          <p className="mt-2 text-sm text-[#5e7a6a]">Looks like you haven't added anything yet.<br />Explore fresh produce straight from local farmers.</p>
          <Link
            to="/products"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#1f7a4d] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700 active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            Shop More Products
          </Link>
        </div>
      )}
      {items.map((item) => (
        <div key={item.productId} className="card flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="min-w-0">
            <p className="font-semibold">{item.name}</p>
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <button className="px-2 border rounded" onClick={() => dispatch(updateQty({ productId: item.productId, quantity: item.quantity - 1 }))}>-</button>
              <input
                className="w-16 border rounded px-2 py-1"
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => dispatch(updateQty({ productId: item.productId, quantity: Number(e.target.value) }))}
              />
              <button className="px-2 border rounded" onClick={() => dispatch(updateQty({ productId: item.productId, quantity: item.quantity + 1 }))}>+</button>
            </div>
          </div>
          <div className="flex items-center justify-between sm:justify-end gap-3">
            <p>{formatCurrency(item.price * item.quantity)}</p>
            <button className="text-sm text-red-500" onClick={() => dispatch(removeFromCart(item.productId))}>Remove</button>
          </div>
        </div>
      ))}
      {items.length > 0 && (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="font-semibold">Total: {formatCurrency(total)}</p>
          <div className="flex gap-3 w-full sm:w-auto">
            <button className="text-sm text-gray-500" onClick={() => dispatch(clearCart())}>Clear</button>
            <Link to="/checkout" className="btn text-sm w-full sm:w-auto text-center">Checkout</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
