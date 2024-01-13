import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckOutProduct from "./CheckOutProduct";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "./axios";
import { db } from "./Firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const Navigate = useNavigate();
  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
  const stripe = useStripe();
  const element = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);
  useEffect(() => {
    // - Generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // - Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);
  console.log("THE SECRET IS >>>", clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: element.getElement(CardElement),
        },
      })
      
      .then(({ paymentIntent }) => {
        //paymentIntent = payment confirmation
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        Navigate("/orders");
      });
  };
  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout(<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3> Delivery Adress</h3>
          </div>
          <div className="payment_adress">
            <p>{user?.email} </p>
            <p>9061 Seward park Ave.</p>
            <p>Seattle, WA</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
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
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total:{value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
























// import React, { useEffect, useState } from 'react'
// import './Payment.css'
// import { useStateValue } from './StateProvider'
// import CheckOutProduct from './CheckOutProduct';
// import { Link, useNavigate } from 'react-router-dom';
// import { CardElement,useStripe, useElements  } from "@stripe/react-stripe-js";
// import CurrencyFormat from 'react-currency-format';
// import axios from './axios';
// import { db } from './Firebase';

// function Payment() {
//   const [{basket, user}, dispatch] = useStateValue();
//   const Navigate = useNavigate();

//   const getBasketTotal = (basket) =>
//     basket?.reduce((amount, item) => item.price + amount, 0);

//   const stripe = useStripe();
//   const element = useElements();

//   const [error, setError] = useState(null);
//   const [disabled, setDisabled] = useState(true);
//   const [succeeded, setSucceeded] = useState(false);
//   const [processing, setProcessing] = useState("");
//   const [clientSecret, setClientSecret] = useState(true);

//   useEffect(() => {
//     // Generate the special stripe secret which allows us to charge a customer
//     const getClientSecret = async () => {
//       const response = await axios({
//         method: "post",
//         // Stripe expects the total in currencies subunits
//         url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
//       });
//       setClientSecret(response.data.clientSecret);
//     };

//     getClientSecret();
//   }, [basket]);

//   console.log("THE SECRET IS >>>", clientSecret);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setProcessing(true);

//     const payload = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: element.getElement(CardElement),
//       }
//     }).then(({paymentIntent}) => {
//       // Payment intent - payment confirmation
//       db.collection("users")
//         .doc(user?.uid)
//         .collection("orders")
//         .doc(paymentIntent.id)
//         .set({
//           basket: basket,
//           amount: paymentIntent.amount,
//           created: paymentIntent.created
//         });

//       setSucceeded(true);
//       setError(null);
//       setProcessing(false);

//       dispatch({
//         type: "EMPTY_BASKET",
//       });

//       Navigate("/orders");
//     });
//   };

//   const handleChange = (event) => {
//     setDisabled(event.empty);
//     setError(event.error ? event.error.message : '');
//   };

//   return (
//     // Your JSX elements...
//   )}

// export default Payment;
