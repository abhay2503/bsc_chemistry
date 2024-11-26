import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  
  return (
    <>
    <nav className="navbar navbar-expand-lg nav-background">
       <div className="container-fluid">
         <Link className="navbar-brand main-logo" href="/">
           {/* <img src="/images/logo.png" className="logo"/> */}

           <span className='logoname'>Cracking Bsc Chemistry</span>
         </Link>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
           <ul className="navbar-nav  mb-2 mb-lg-0 main-nav-ul">
             <li className="nav-item px-4">
               <Link className="nav-link text-dark" aria-current="page" href="/">Home</Link>
             </li>

             <li className="nav-item px-4">
               <Link className="nav-link text-dark" href="/AboutUs">About Us</Link>
             </li>

             <li className="nav-item dropdown px-4">
               <Link className="nav-link dropdown-toggle text-dark" data-bs-auto-close="outside" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Study Material
               </Link>
               <ul className="dropdown-menu">
                 <li className="dropend nav-font mb-3"><Link className="dropdown-item " data-bs-toggle="dropdown" href="#">Semester-1</Link>
                  
                 </li>
                 <li className="dropdown-divider"></li>

                 <li className="dropend nav-font mb-3"><Link className="dropdown-item " data-bs-toggle="dropdown" href="#">Semester-2</Link>
                  
                  </li>
                 <li className="dropdown-divider"></li>

                 <li className="dropend nav-font mb-3"><Link className="dropdown-item " data-bs-toggle="dropdown" href="#">Semester-3</Link>
                  
                 </li>
                 <li className="dropdown-divider"></li>

                 <li className="dropend nav-font mb-3"><Link className="dropdown-item " data-bs-toggle="dropdown" href="#">Semester-4</Link>
                  
                 </li>

                 <li className="dropend nav-font mb-3"><Link className="dropdown-item " data-bs-toggle="dropdown" href="#">Semester-5</Link>
                  
                  </li>


                  <li className="dropend nav-font mb-3"><Link className="dropdown-item " data-bs-toggle="dropdown" href="#">Semester-6</Link>
                  
                  </li>

                 </ul>

                 
                  
               </li>

               <li className="nav-item px-4">
               <Link className="nav-link text-dark" href="#contact">Contact Us</Link>
             </li>
                
           </ul>
            
             
            
             
         
           
         </div>
       </div>
     </nav>
   </>
  )
}

export default Navbar