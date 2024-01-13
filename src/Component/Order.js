import React from "react";
import "./Order.css";
import moment from "moment";
import CurrencyFormat from "react-currency-format";
import CheckOutProduct from "./CheckOutProduct";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMM Do YYY, h:ma")}</p>
      <p className="order_id"></p>
      <small>{order.id}</small>
      {order.data.basket?.map((item) => (
        <CheckOutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order_total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
