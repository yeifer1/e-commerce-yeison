import { useContext } from "react"
import  {ProductsContext}  from "./ProductsContextProvider"



const CartTotal = () => {
 
  const { cart } = useContext (ProductsContext)

  const total =cart.reduce((acc,elem) => acc + elem.price,0)
  return (
  <>
    <div className="cart-total">
      
      <h3>Total a pagar $: {total}</h3>
    </div>

    

  
   </>
   
  )
}

export default CartTotal








