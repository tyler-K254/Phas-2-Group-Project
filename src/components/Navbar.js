import React from 'react';
import { NavLink } from 'react-router-dom';

// const linkStyles = {
//     display: "inline-block",
//     width: "50px",
//     padding: "12px",
//     margin: "0 6px 6px",
//     background: "blue",
//     textDecoration: "none",
//     color: "white",
//   };

function Navbar(){
    return (
        <>
        <hr className='vertical-line'></hr>
        <hr className='vertical-line2'></hr>
        <div className='navigation-bar'>
          
            <NavLink className='navLink' to ="/components/welcome">Welcome</NavLink>
            
            <NavLink className='navLink' to ="/components/usage">Usage</NavLink>
            
            <NavLink className='navLink' to ="/components/products">Products</NavLink>
        </div>
        </>
    )
}

// function Navbar(){
//     return (
//         <div>
//           <NavLink
//             to="/components/welcome"
//             exact
//             style={linkStyles}
//             activeStyle={{
//               background: "darkblue",
//             }}
//           >
//             Welcome
//           </NavLink>
//           <NavLink
//             to="/components/usage"
//             exact
//             style={linkStyles}
//             activeStyle={{
//               background: "darkblue",
//             }}
//           >
//             Usage
//           </NavLink>
//           <NavLink
//             to="/components/Products"
//             exact
//             style={linkStyles}
//             activeStyle={{
//               background: "darkblue",
//             }}
//           >
//             Products
//           </NavLink>
//         </div>
//       );
// }

export default Navbar