import MenuItem from "./components/MenuItem";
import OrdenContents from "./components/OrdenContents";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";
import OrderTotales from "./components/OrderTotales";
import TipPercentageForm from "./components/TipPercentageForm";

function App() {
  const { order, addItem, removerItem, tip, setTip, placeOrder } = useOrder();

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadora de propinas y consumos
        </h1>
      </header>

      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2 ">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>

          <div className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length > 0 ? (
            <>
              <OrdenContents order={order} removeItem={removerItem} />
              <TipPercentageForm setTip={setTip} tip={tip} />
              <OrderTotales order={order} tip={tip} placeOrder={placeOrder} />
            </>
          ) : (
            <p className="text-center">La orden esta vacía</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
