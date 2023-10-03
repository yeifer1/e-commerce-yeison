
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

 

  return (
    <>
      <header>
        
        <Link className='logo' to ={"/home"} >
        <img src="https://i.pinimg.com/originals/b4/48/9a/b4489a301a8cfbe3b524204d46035d19.png" alt=""  />
        </Link>
        <div className='input'>
          <div className='input-container'>
            
           <div  className='pages'>

           <div className='inicio'>
               <Link to={"/home"}>Inicio</Link>
               </div>

              
           
                <div className='login'>
                <Link to={"/login"}>Login</Link > 
                  </div>

                  <div className='register'>
               <Link to={"/register"}>Signup</Link>
               </div>  

               
               <div className='register'>
               <Link to={"/dashboard"}>Dashboard</Link>
               </div>  
             
             
               <div className='carrito'>
               <Link to={"/cart"} ><img src="https://cdn-icons-png.flaticon.com/512/8146/8146003.png" alt=""  width="50px"/></Link> 
               </div>
            </div>
          </div> 
        </div>
      </header>
    </>
  );
}

export default Navbar;
