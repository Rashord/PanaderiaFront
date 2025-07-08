import React, { useEffect, useMemo, useState } from 'react'
import TableScreenPublic from './TableScreenPublic'
import SearchInput from '../Search/SearchInput'
import CircleCrossIcon from '../Search/CircleCrossIcon'

const ENDPOINT_DATA=`http://localhost:3000/api/getAllProducto`


const column = [
  {id: 1 ,nameColumn:'nombreProducto', label: 'Nombre'},
  {id: 2, nameColumn: 'precioVentaReal', label: 'Precio'},
  {id: 3, nameColumn: 'precioVentaReal', label: 'Estado'}
]

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35,agemon:'lolol' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42,agemon:'lolol' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45,agemon:'lolol' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16,agemon:'lolol' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null,agemon:'lolol' },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150,agemon:'lolol' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44,agemon:'lolol' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, agemon:'lolol' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, agemon:'lolol' },
];

const InventarioScreenPublic = ( {products} ) => {
  const [filterValue, setFilterValue] = useState('')
  const hasSearchFilter = Boolean(filterValue)
  const getValue = (value) =>{
    setFilterValue(value)
  }

  const filteredList = useMemo(()=>{
    let filteredData = [...products]
    console.log(products)
    if(hasSearchFilter){
      filteredData = filteredData.filter((products )=>
        products.nombreProducto.toLowerCase().includes(filterValue.toLowerCase())
      )
    }
    return filteredData
  }, [products,hasSearchFilter, filterValue])
  
  return (
    <div>
      <SearchInput getValue={getValue}/>
      <TableScreenPublic column={column} rows={filteredList}/>
    </div>
  )
}

export default InventarioScreenPublic