import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";

//import { useHistory, useNavigate } from "react-router-dom";
//import { Navigate, useNavigate } from "react-router-dom";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  // const history = useHistory();
  const Navigate = useNavigate();

  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => Navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;















// import React from "react";
// import "./Subtotal.css";
// import CurrencyFormat from "react-currency-format";
// import { useStateValue } from "./StateProvider";
// import { useNavigate } from 'react-router-dom';

// function Subtotal() {
//   const [{ basket }, dispatch] = useStateValue();
//   const navigate = useNavigate();

//   const handleClick = () => {
//     // Example usage: Navigate to a new route on button click
//     navigate('/new-route');
//   };

//   const getBasketTotal = (basket) =>
//     basket?.reduce((amount, item) => item.price + amount, 0);

//   return (
//     <div className="subtotal">
//       <CurrencyFormat
//         renderText={(value) => (
//           <div>
//             <p>
//               Subtotal({basket.length} items): <strong>{value}</strong>
//             </p>
//             <small className="subtotal_gift">
//               <input type="checkbox" /> This order contains a gift
//             </small>
//           </div>
//         )}
//         decimalScale={2}
//         value={getBasketTotal(basket)}
//         displayType={'text'}
//         thousandSeparator={true}
//         prefix={'$'}
//       />
//       {/* <button onClick={(e) => history.push('/payment')}>Proceed to Checkout</button> */}
//       <button onClick={handleClick}>Go to New Route</button>

//     </div>
//   );
// }

// export default Subtotal;

// import React from "react";
// import "./Subtotal.css";
// import CurrencyFormat from "react-currency-format";
// import { useStateValue } from "./StateProvider";
// function Subtotal() {
//   const[{basket},dispatch] = useStateValue();
//   const getBasketTotal = (basket) =>
//   basket?.reduce((amount, item) => item.price + amount,0);

//   return (
//     <div className="subtotal">
//       <CurrencyFormat
//         renderText={(value) => (
//           <div>
//             <p>
//               Subtotal({basket.length}items): <strong>{value}</strong>
//             </p>
//             <small className="subtotal_gift">
//               <input type="checkbox" /> This order contains a gift
//             </small>
//           </div>
//         )}
//         decimalScale={2}
//         value={getBasketTotal(basket)}
//         displayType={'text'}
//         thousandSeparator={true}
//         prefix={'$'}
//       />
//       <button>Proceed to Checkout</button>
//     </div>
//   );
// }

// export default Subtotal;

// import React from "react";
// import "./Subtotal.css";
// import CurrencyFormat from "react-currency-format";
// import { useStateValue } from "./StateProvider";
// import { useNavigate } from 'react-router-dom';

// function Subtotal() {
//   const [{ basket }, dispatch] = useStateValue();
//  const navigate = useNavigate();
//   const handleClick = () => {
//     // Example usage: Navigate to a new route on button click
//     navigate('/new-route');
//   const getBasketTotal = (basket) =>
//     basket?.reduce((amount, item) => item.price + amount, 0);

//   return (
//     <div className="subtotal">
//       <CurrencyFormat
//         renderText={(value) => (
//           <div>
//             <p>
//               Subtotal({basket.length} items): <strong>{value}</strong>
//             </p>
//             <small className="subtotal_gift">
//               <input type="checkbox" /> This order contains a gift
//             </small>
//           </div>
//         )}
//         decimalScale={2}
//         value={getBasketTotal(basket)}
//         displayType={'text'}
//         thousandSeparator={true}
//         prefix={'$'}
//       />
//       {/* <button onClick={(e) => history.push('/payment')}>Proceed to Checkout</button> */}
//       <button onClick={handleClick}>Go to New Route</button>
//          <h1>payment page</h1>
//     </div>
//   );
// }

// export default Subtotal;
