import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import CartItem from "./Cartitem.jsx";
import { useState } from "react";

function App() {
  const products = [
    {
      id: 1,
      title: "iphone",
      price: 400,
      rating: 3,
      img: "assets/iphone.jpg",
    },
    {
      id: 2,
      title: "imac",
      price: 300,
      rating: 2,
      img: "assets/imac.jpg",
    },
    {
      id: 3,
      title: "iwatch",
      price: 200,
      rating: 4,
      img: "assets/iwatch.jpg",
    },
    {
      id: 4,
      title: "ipod",
      price: 100,
      rating: 1,
      img: "assets/ipod.jpg",
    },
    {
      id: 5,
      title: "ipad",
      price: 500,
      rating: 3,
      img: "assets/ipad.jpg",
    },
    {
      id: 6,
      title: "ibook",
      price: 600,
      rating: 5,
      img: "assets/ibook.jpg",
    },
  ];

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  let addToCart = (item) => {
    setCart([...cart, item]);
    setTotal(total + item.price);
  };

  let removeFromCart = (item) => {
    let index = cart.findIndex((obj) => obj.id === item.id);
    cart.splice(index, 1);
    setCart([...cart]);
    setTotal(total - item.price);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {products.map((item) => {
              return (
                <Card
                  item={item}
                  cartItems={cart}
                  handleAddToCart={addToCart}
                ></Card>
              );
            })}
          </div>
        </div>
        <div className="col-lg-4">
          {cart.length === 0 ? (
            <h1>EMPTY CART</h1>
          ) : (
            <div className="row">
              <ol className="list-group list-group-numbered">
                {cart.map((cartItem) => {
                  return (
                    <CartItem
                      cartItem={cartItem}
                      removeFromCart={removeFromCart}
                    ></CartItem>
                  );
                })}
              </ol>
              <h1>Total - {total}</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
