import { useState, useEffect , useContext} from "react"
import { useParams } from 'react-router-dom'
import { ProductsContext } from "../contexts/ProductsContextProvider";
import './ItemsDetails.css';
import Navbar from "../Navbar/Navbar";
const ItemsDetails = () => {
    const [item, setItem] = useState({})
    const { id } = useParams()
    const {  cart, setCart } = useContext(ProductsContext)
    useEffect(() => {
        fetch(`https://ecommerce-2023-ts46.onrender.com/items/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id])

    
  const addProducts = (item) => {
    const itemRepeat = cart.find(cartItem => cartItem.id === item.id)

    if (itemRepeat) {
      setCart(cart.map(cartItem => cartItem.id === item.id ? { ...item, quanty: itemRepeat.quanty + 1 } : cartItem))
    } else {
      setCart([...cart, item])
    }
  }
    
    return (

        <>
        <Navbar/>
        <div className="description-product">
            <img className="card-img" src={item.image} alt="imagen" />
            <p className="product-name">Name:  {item.product_name}</p>
            <div className="price-container">

                <p className='category'> Category:  {item.category}</p>
                <p className="description">Description: {item.description}</p>
                <h4 className="codigo">Codigo:{item.id}</h4>
                <h2 className="brand">Brand: {item.brand}</h2>
                <h4 className="sku">Sku:  {item.sku}</h4>
                <p className="createdAt">createdAt:  {item.createdAt}</p>
                <p className="updatedAt:  ">updatedAt:  {item.updatedAt}</p>
                <h3 className="Price">$: {item.price}</h3>
                <button onClick={() => addProducts(item)}>Comprar</button>
            </div>
        </div>
        </>
    )
}

export default ItemsDetails
