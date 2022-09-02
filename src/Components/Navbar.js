import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
     return (
          <div class="container">
               <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <Link to={"/"} class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                         <span class="fs-4">Authentication System</span>
                    </Link>

                    <ul class="nav nav-pills">
                         {/* <li class="nav-item"><Link class="nav-link active" aria-current="page">Home</Link></li> */}

                    </ul>
               </header>
          </div>
     );
}

export default Navbar;
