/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"

  export const ProductsContext = createContext()

 const ProductsContextProvider = ({children}) => {
                                                                            
    const [items, setItems] = useState([])                      
    const [cart, setCart] = useState([])
   

useEffect(()=>{
fetch('https://ecommerce-2023-ts46.onrender.com/items') 
.then(res =>res.json())
.then(data => setItems(data))

},[])
  return (
   <>

    <ProductsContext.Provider value={{items, cart, setCart}}>
        {children}
    </ProductsContext.Provider>
    </>
  )
}

export default ProductsContextProvider

