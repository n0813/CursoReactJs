import { useMemo } from "react";
import { OrderItem } from "../types/index";
import { formatCurrency } from "../helpers";
type OrderTotalProps = {
  order: OrderItem[];
};

export default function OrderTotales({ order }: OrderTotalProps) {
  const subTotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina: </h2>
        <p>
          Subtotal a pagar: {""}
          <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
        </p>

        <p>
          Propina: {""}
          <span className="font-bold">$0</span>
        </p>

        <p>
          Total a Pagar: {""}
          <span className="font-bold">$0</span>
        </p>
      </div>

      <button className=""></button>
    </>
  );
}
