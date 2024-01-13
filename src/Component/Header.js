import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";


function Header() {
  const [{ basket,user }, dispatch] = useStateValue();
  const handleAuthentication = () =>{
    if (user) {
      auth.signOut();
    }
  };
  console.log('myuser' ,user)
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://i.pinimg.com/736x/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.jpg"
        />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/Login"} className="header_clearlink">
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders" className="header_clearlink">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link to="/CheckOut" className="header_clearlink">
        
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="heade_optionLineTwo header_basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
  }

export default Header;
























// import React from "react";
// import "./Header.css";
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
// import { Link } from "react-router-dom";
// import { useStateValue } from "./StateProvider";
// import { auth } from "./Firebase";

// function Header() {
//   const [{ basket, user }, dispatch] = useStateValue();

//   const handleAuthentication = () => {
//     if (user) {
//       auth.signOut();
//     }
//   };
//   return (
//     <div className="header">
//       <Link to="/">
//         <img
//           className="header__logo"
//           src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
//         />
//       </Link>
//       <div className="header__search">
//         <input className="header__searchInput" type="text" />
//         <SearchIcon className="header__searchIcon" />
//       </div>
//       <div className="header__nav">
//         <Link to={!user && "/login"} className="header__clearlink">
//           <div onClick={handleAuthentication} className="header__option">
//             <span className="header__optionLineOne">
//               Hello {!user ? "Guest" : user.email}
//             </span>
//             <span className="header__optionLineTwo">
//               {user ? "Sign Out" : "Sign In"}
//             </span>
//           </div>
//         </Link>

//         <Link to="/orders" className="header__clearlink">
//           <div className="header__option">
//             <span className="header__optionLineOne">Returns</span>
//             <span className="header__optionLineTwo">& Orders</span>
//           </div>
//         </Link>
//         <div className="header__option">
//           <span className="header__optionLineOne">Your</span>
//           <span className="header__optionLineTwo">Prime</span>
//         </div>
//         <Link to="/checkout" className="header__clearlink">
//           <div className="header__optionBasket">
//             <ShoppingBasketIcon />
//             <span className="header_optionLineTwo header_basketCount">
//               {basket?.length}
//             </span>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Header;




