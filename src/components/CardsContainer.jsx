/* eslint-disable no-unused-vars */
import './CardsContainer.css';
import { useContext, useState} from "react"
import { ProductsContext } from './contexts/ProductsContextProvider'
import { Link } from 'react-router-dom';
import ItemsDetails from './pages/ItemsDetails';
const CardsContainer = () => {
  const { items, cart, setCart } = useContext(ProductsContext)

  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  

  const handleInputChange = event => {
    setSearchTerm(event.target.value)
  }

  const filteredItems = items.filter(item => {
    const matchesSearch = item.product_name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const addProducts = (item) => {
    const itemRepeat = cart.find(cartItem => cartItem.id === item.id)

    if (itemRepeat) {
      setCart(cart.map(cartItem => cartItem.id === item.id ? { ...item, quanty: itemRepeat.quanty + 1 } : cartItem))
    } else {
      setCart([...cart, item])
    }
  }

  const removeProduct = (item) => {
    setCart(cart.filter(cartItem => cartItem.id !== item.id))
  }

  return (
    <div className='card-container'>
      <div className='barra-busqueda'>
        <input 
          type="text" 
          value={searchTerm} 
          onChange={handleInputChange} 
          placeholder="Buscar productos..." 
        />
      
        <select className='category-options' value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
      
          <option value='all'>Todas</option>
          <option value={items.category}>Kids</option>
          <option value={items.category}>Shoes</option>
          <option value={items.category}>Computers</option>
          <option value={items.category}>Automotive</option>
          <option value={items.category}>Toys</option>
          <option value={items.category}>Tools</option>
          <option value={items.category}>Health</option>
          <option value={items.category}>Sports</option>
          <option value={items.category}>Outdoors</option>
          <option value={items.category}>Jewelery</option>
          <option value={items.category}>Movies</option>
          <option value={items.category}>Industrial</option>
          <option value={items.category}>Music</option>
          <option value={items.category}>Baby</option>
          <option value={items.category}>Beauty</option>
          <option value={items.category}>Games</option>
          <option value={items.category}>Garden</option>
          <option value={items.category}>Home</option>
          <option value={items.category}>Books</option>
          <option value={items.category}>Electronics</option>
         


        </select>
      </div>
      <div className="cardContainer-home">
    {filteredItems.map(item => (
        <div className="card" key={item.id}>
            <Link to={`/details/${item.id}`}>
                <img className="card-img" src={item.image} alt="imagen" />
            </Link>
            <p className="product-name">{item.product_name}</p>
            <p className='category'>{item.category}</p>
            <p className="description">{item.description}</p>
            <div className="price-container">
                <h5 className="Price">$: {item.price}</h5>
                <button onClick={() => addProducts(item)}>Comprar</button>
            </div>
        </div>
    ))}
</div>
    </div>
  )
}

export default CardsContainer
