import { useEffect, useState } from "react";
import Guitar from "./components/Guitar";
import Header from "./components/Header";
import { db } from "./data/db";

function App() {

  //traemos datos del localstorage
  const initialCart = () => {
    const localStorageCart = localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []
  }

  const [data, ] = useState(db);
  const [cart, setCart] = useState(initialCart);

  const Max_Item = 5
  const Min_Item = 1

  useEffect(() => {
    localStorage.setItem('cart',JSON.stringify(cart))

  }, [cart])
  

  //todo agregar a carrito
  function addToCart(item) {
    //saber si ya existe en el arreglo
    const itemExist = cart.findIndex((guitar) => guitar.id === item.id);

    if (itemExist >= 0) {
      //si ya existe lo sumamos para agregarle otro
      const updateCart = [...cart];

      updateCart[itemExist].quantity++;
      setCart(updateCart);
    } else {
      //agregamos al carrito
      item.quantity = 1;
      setCart([...cart, item]);
    }
    

    
  }

  //todo eliminar de carrito
  function removeFromCart(id) {
    // console.log('Eliminando', id)
    setCart(prevCart => prevCart.filter((guitar) => guitar.id !== id))
  }

  //todo incrementar producto
  function increaseQuantity(id) {
    const updateCart = cart.map( (item) =>  {
      if (item.id === id && item.quantity < Max_Item) {
        return {
          ...item, quantity: item.quantity +1
        }
      }
      return item
    })

    setCart(updateCart)
  }

  //todo limpiar todo el carrito
  function clearCart() {
    setCart([])
  }

  //todo decrementar producto
  function decreaseQuantity(id) {
    const updateCart = cart.map((item) => {

      if (item.id === id && item.quantity > Min_Item) {
        return {
          ...item, quantity: item.quantity - 1
        }
      }
      return item
    })

    setCart(updateCart)
  }

  return (
    <>
      <Header 
      cart={cart}
      removeFromCart={removeFromCart}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
      clearCart={clearCart}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => {
            return (
              <Guitar
                key={guitar.id}
                guitar={guitar}
                cart={cart}
                setCart={setCart}
                addToCart={addToCart}
              />
            );
          })}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
