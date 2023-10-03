
import { useContext,} from "react"
import  {ProductsContext}  from "./contexts/ProductsContextProvider"
//import CartItemCounter from "./contexts/CartItemCounter"

const CartElements = () => {


  const removeProduct = (item) => {

    

    setCart(cart.filter(cartItem => cartItem.id !== item.id))
}
  

    const {cart, setCart} = useContext(ProductsContext)

    

  return cart.map((items)=>{
   
    return(
     
      <div className="cart-container" key={items.id}>
      
      <img src={items.image} alt="" width="100px"/>
      <div className="info-container">
          <h3 className="name">{items.product_name}</h3>
          <h4 className="price">$: {items.price}</h4>
         
      </div>
      <div className="buton">
      <button className="button" onClick={() => removeProduct(items)}>Borrar</button>
      </div>
  </div>

    )

  }

  )
}

export default CartElements