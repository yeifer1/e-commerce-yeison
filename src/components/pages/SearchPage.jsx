
import { useContext } from "react" 
import { ProductsContext } from "../contexts/ProductsContextProvider"
import { useLocation } from "react-router-dom"


const SearchPage = () => {

  const location = useLocation()
  console.log(location)

const  {globalItems} = useContext(ProductsContext)

const filteredItems = globalItems.filter(items => items.product_name.includes(location.state))

console.log( filteredItems)
  return (
    <div>SearchPage</div>
  )
}

export default SearchPage

