
// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./Component/Header";
// import Home from "./Component/Home";
// import CheckOut from "./Component/CheckOut";
// import Login from "./Component/Login";
// import { useStateValue } from "./Component/StateProvider";
// import { auth } from "./Component/Firebase";
// import Payment from "./Component/Payment"; // Check for typos here
// import {loadStripe} from '@stripe/stripe-js'
// import {Elements} from '@stripe/react-stripe-js'

// const promise = loadStripe(
//   'pk_test_51OPKarKzXKtOL2pS5o2XaxZVY5KCrTQU5g7uleXCu2ZKWRshcChAFMZ6nTXQ3N1epziii11GElPumaTp0VgeglUi00hKDf69Um'
// );


// function App() {
//   const [{}, dispatch] = useStateValue();
//   useEffect(() => {
//     auth.onAuthStateChanged((authUser) => {
//       //console.log("The User is >>>", authUser in
//       if (authUser) {
//         //the user just logged in/the user was logged in
//         dispatch({
//           type: "SET_USER",
//           user: authUser,
//         });
//       } else {
//         //the user is logged out
//         dispatch({
//           type: "SET_USER",
//           user: null,
//         });
//       }
//     });
//   }, []);

//           return (
//           <Router>
//           <div className="App">
//           {/* <Header/> */}
//           <Routes>
//           <Route path="/Login"element={<Login />} />
//           <Route path="/Payment"
//           element={
//           <>
//           <Header/>
//           <Elements stripe={promise}>
//           <Payment/>
//           </Elements>
//           </>
//           }
//           />      
//           <Route path="/"element={ <> <Header /><Home /></>}/>
//           <Route path="/CheckOut"element={ <><Header/><CheckOut/> 

//           </>
//           }
//           />
//           </Routes>
//           </div>
//           </Router>
//   );
// }

// export default App;











import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Component/Home";
import CheckOut from "./Component/CheckOut";
import Login from "./Component/Login";
import { useStateValue } from "./Component/StateProvider";
import { auth } from "./Component/Firebase";
import Payment from "./Component/Payment"; // Check for typos here
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Orders from "./Component/Orders";


const promise = loadStripe(
  "pk_test_51OPKarKzXKtOL2pS5o2XaxZVY5KCrTQU5g7uleXCu2ZKWRshcChAFMZ6nTXQ3N1epziii11GElPumaTp0VgeglUi00hKDf69Um"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      //console.log("the user is", authUser)
      if (authUser) {
        // the user just looged in / the user was

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is loged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/orders"element={<><Header /> <Orders /> </> }/>
          <Route path="/login"element={<> <Login /></> }/>
          <Route path="/"element={<><Header /> <Home /> </> }/>
          <Route path="/checkout"element={<><Header /> <CheckOut /></>} />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;









































// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./Component/Header";
// import Home from "./Component/Home";
// import CheckOut from "./Component/CheckOut";
// import Login from "./Component/Login";
// import { useStateValue } from "./Component/StateProvider";
// import { auth } from "./Component/Firebase";
// import Payment from "./Component/Payment";

// function App() {
//   const [{}, dispatch] = useStateValue();
//   useEffect(() => {
//     auth.onAuthStateChanged((authUser) => {
//       //console.log("The User is >>>", authUser in
//       if (authUser) {
//         //the user just logged in/the user was logged in
//         dispatch({
//           type: "SET_USER",
//           user: authUser,
//         });
//       } else {
//         //the user is logged out
//         dispatch({
//           type: "SET_USER",
//           user: null,
//         });
//       }
//     });
//   }, []);

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/Login">
//             <Login />
//           </Route>
//           <Route path="/Payment">
//             <Payment />
           
//           </Route>
//           <Route path="/CheckOut">
//             <Header />
//             <CheckOut />
//           </Route>

//           <Route path="/">
//             <Header />
//             <Home />
//           </Route>
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


    




// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./Component/Header";
// import Home from "./Component/Home";
// import CheckOut from "./Component/CheckOut";
// import Login from "./Component/Login";
// import { useStateValue } from "./Component/StateProvider";
// import { auth } from "./Component/Firebase";
// import Payment from "./Component/Payment";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// const promise = loadStripe(
//   'pk_test_51OPKarKzXKtOL2pS5o2XaxZVY5KCrTQU5g7uleXCu2ZKWRshcChAFMZ6nTXQ3N1epziii11GElPumaTp0VgeglUi00hKDf69Um'
// );

// function App() {
//   const [{}, dispatch] = useStateValue();

//   useEffect(() => {
//     auth.onAuthStateChanged((authUser) => {
//       if (authUser) {
//         dispatch({
//           type: "SET_USER",
//           user: authUser,
//         });
//       } else {
//         dispatch({
//           type: "SET_USER",
//           user: null,
//         });
//       }
//     });
//   }, []);

//   return (
//     <Router>
//       <div className="App">
//         {/* <Header /> */}

//         <Routes>
//           <Route path="/Login" element={<Login />} />
//           <Route path="/Payment"
//       element={<><Header /><Elements stripe={promise}><Payment /></Elements></>
//  }
// />
          
//           <Route path="/"
//           element={<><Header /><Home /></>}/>
//           <Route path="/checkout"element={ <><Header /><CheckOut /></> }/>
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./Component/Header";
// import Home from "./Component/Home";
// import CheckOut from "./Component/CheckOut";
// import Login from "./Component/Login";
// import { useStateValue } from "./Component/StateProvider";
// import { auth } from "./Component/Firebase";
// import Payment from "./Component/Payment";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// const promise = loadStripe(
//   'pk_test_51OPKarKzXKtOL2pS5o2XaxZVY5KCrTQU5g7uleXCu2ZKWRshcChAFMZ6nTXQ3N1epziii11GElPumaTp0VgeglUi00hKDf69Um'
// );

// function App() {
//   const [{}, dispatch] = useStateValue();

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((authUser) => {
//       if (authUser) {
//         dispatch({
//           type: "SET_USER",
//           user: authUser,
//         });
//       } else {
//         dispatch({
//           type: "SET_USER",
//           user: null,
//         });
//       }
//     });

//     // Clean up subscription to avoid memory leaks
//     return () => {
//       unsubscribe();
//     };
//   }, [dispatch]);

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/Login"element={<Login />}/>
//           <Route path="/Payment">
//             <Elements stripe={promise}>
//               <Payment />
//             </Elements>
//           </Route>

//           <Route
//             path="/CheckOut"
//             element={
//               <>
//                 <Header />
//                 <CheckOut />
//               </>
//             }
//           />
//           <Route
//             path="/"
//             element={
//               <>
//                 {" "}
//                 <Header />
//                 <Home />
//               </>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
