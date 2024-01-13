import React from "react";
import "./CheckOut.css";
import Subtotal from "./Subtotal";
import CheckOutProduct from "./CheckOutProduct";
import { useStateValue } from './StateProvider'
function CheckOut() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_Ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2023/HOL23/W1/LandingPage/Header/EN/HOL23_1543_Landing_Header_HolidayDeals_DT.jpg"
          alt=""
        />
        <h3>Hello</h3>
        <h2 className="checkout_title">Your shopping Basket</h2>
        {basket.map((item) => (
        <CheckOutProduct
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        rating={item.rating}
        />
        ))}
        
      </div>
      <div className="checkout_right">
        <Subtotal/>
      </div>
    </div>
  );
}

export default CheckOut;



