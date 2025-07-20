import HeaderApp from './components/header/HeaderApp'
import { CustomDataTable } from './components/privateContent/CustomDataTable'
import { FormularioAdd } from './components/privateContent/FormularioAdd'
import InventarioScreenPublic from './components/publicContent/InventarioScreenPublic'

function App() {

  return (
    <div> 
      <HeaderApp/>
      <FormularioAdd/>
    </div>
  )
}

export default App
