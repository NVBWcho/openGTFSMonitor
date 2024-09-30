import { NavLink } from "react-router-dom/cjs/react-router-dom";




import { useEffect } from "react";

import { useState } from "react";





export const Navbar = () => {

  const [toggleLogin, setToggleLogin] = useState(0);

 
 


  
  return (
    <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>
      <div className='container-fluid'>
        <span className='navbar-brand'> openGTFSMonitor</span>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown'
          aria-expanded='false'
          aria-label='Toggle Navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav'>

          

              <li className='nav-item'>
                <NavLink className='nav-link' to='/home'>
                  Home
                </NavLink>
              </li>

            

            {/*   <li className='nav-item'>
                <NavLink className='nav-link' to='/search'>
                  Suche 
                </NavLink>
              </li> */}




            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/gtfsDashboard">
                Gtfs
              </NavLink>

            </li> */}

            <li className="nav-item">
              <NavLink className="nav-link" to="/landingPage">
                Main Feed
              </NavLink>

            </li>

           

            

            


          </ul>
          <ul className='navbar-nav ms-auto'>
            {<li className='nav-item m-1'>

            


             



            </li>}
          </ul>
        </div>
      </div>
    </nav>
  );
};
