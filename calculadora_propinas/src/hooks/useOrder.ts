import { useState } from "react";
import type { MenuItem, OrderItem } from "../types/index";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);

  //agregar elementos
  const addItem = (item: MenuItem) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id);

    if (itemExist) {
      const updateOrder = order.map((order) =>
        order.id === item.id
          ? { ...order, quantity: order.quantity + 1 }
          : order
      );

      setOrder(updateOrder);
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  //remover elementos
  const removerItem = (id: MenuItem["id"]) => {
    setOrder(order.filter((item) => item.id !== id));
  };

  return { order, addItem, removerItem };
}
