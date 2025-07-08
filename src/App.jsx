import HeaderApp from './components/header/HeaderApp'
import InventarioScreenPublic from './components/publicContent/InventarioScreenPublic'
import React from 'react'

const ENDPOINT_DATA=`http://192.168.1.20:3000/api/getAllProducto`


function App() {
  const [products, setProducts] = React.useState([])
  React.useEffect(()=>{
      fetch(ENDPOINT_DATA)
        .then(res => res.json())
        .then(res => setProducts(res.data))
    },[])
  return (
    <div> 
      <h1 style={{color:'black'}}>Holita</h1>
    </div>
  )
}

export default App
