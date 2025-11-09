import { IoMdAdd } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { MdOutlineDeleteForever } from "react-icons/md";
import { Footer , BottomSignIn } from "./Minorcomponents";

export function CartPage({ Cart, SetCart, products }) {
  const cartItems = products.filter((item) => Cart[item.id]);

  const increase = (id) => {
    SetCart((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const decrease = (id) => {
    SetCart((prev) => {
      const updated = { ...prev };
      if (updated[id] === 1) {
        delete updated[id];
      } else {
        updated[id] -= 1;
      }
      return updated;
    });
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * Cart[item.id], 0);

  return (
    <>
    <div className="p-4 min-h-[200vh]">
        <div className="flex h-full w-full items-center justify-center">
            <h1 className="text-2xl font-bold mb-6"><span className="flex items-center"><GiShoppingCart className="text-[30px]" />&nbsp;Your Shopping Cart</span></h1>
        </div>
      {cartItems.length === 0 ? (
        <div className="sm:flex flex-col items-center justify-center">
            <img src="./empty.svg" alt="Empty image" className="size-[400px]" />
            <p className="text-[30px]">Your cart is empty.</p>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow mb-4">
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-green-600 font-bold">${item.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decrease(item.id)}
                  className="p-2 bg-red-500 hover:bg-red-600 text-white rounded"
                >
                  <MdOutlineDeleteForever />
                </button>
                <span>{Cart[item.id]}</span>
                <button
                  onClick={() => increase(item.id)}
                  className="p-2 bg-green-500 hover:bg-green-600 text-white rounded"
                >
                  <IoMdAdd />
                </button>
              </div>
            </div>
          ))}
          <div className="mt-6 text-right text-xl font-bold">Total: ${total.toFixed(2)}</div>
        </>
      )}
      {cartItems.length > 0 &&
      <div className="flex absolute right-6 mt-6">
        <button className="p-2 bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 rounded-lg">Make payment</button>
      </div>}
    </div>
    <BottomSignIn />
    <Footer />
    </>
  );
}
