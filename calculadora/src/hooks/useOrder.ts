 import { useState } from "react"
 import type { OrderItem } from '../types/index';

import { MenuItem } from "../types"



export default function useOrder() {

    //  const [order, setOrder] = useState<OrderItem[]>([])
    
     const addItem = (item : MenuItem) => {
        console.log(item)
     }


  return (
    addItem
  )
}
