
import CartElements from "./CartElements"
import CartTotalprovider from "./contexts/CartTotalprovider"
import './Cart.css'
import Navbar from "./Navbar/Navbar"
import { useContext} from "react"
import { ProductsContext } from "./contexts/ProductsContextProvider"
import Pagos from "./pagos"




 export const Cart = () => {

 const {cart} = useContext(ProductsContext)


  
  return  cart.length > 0 ? (
     

    < >
     <Navbar/>
     <br />
     <div className="cart-container " >
    <div className="img-container">
    <img src="https://i.pinimg.com/originals/b4/48/9a/b4489a301a8cfbe3b524204d46035d19.png" alt="" />
          <h1 className="mis-compras">Mis Compras</h1>
          </div>
      <div className="cart-container">
         <div className="cart-element">
          <CartElements/>
          </div>
          <div className="total-provider">
          <CartTotalprovider/>
          </div>
           <div className="card-pagos">
            <Pagos/>
           </div>
      </div>
      </div>
      </>
  ):(
    
    <h2 className="message">Tu carro esta vacio</h2>
  )
}

export default Cart




