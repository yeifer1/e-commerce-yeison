
import ProductsContextProvider from './components/contexts/ProductsContextProvider'


import './App.css'

import  {BrowserRouter} from 'react-router-dom'
import RoutesIndex from './components/routes/RoutesIndex'
import { AuthProvider } from './components/contexts/AuthContext'

function App() {
 
  return (
<>

<ProductsContextProvider>
<div className='app'>
<AuthProvider>
<BrowserRouter>
<RoutesIndex/>

</BrowserRouter>
</AuthProvider>
  </div>
  
</ProductsContextProvider>

</>
  )
}

export default App
