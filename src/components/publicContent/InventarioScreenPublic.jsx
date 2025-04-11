import React, { useMemo, useState } from 'react'
import TableScreenPublic from './TableScreenPublic'
import SearchInput from '../Search/SearchInput'
import CircleCrossIcon from '../Search/CircleCrossIcon'

const column = [
  {id:1, nameColumn: 'lastName'},
  {id:2, nameColumn: 'firstName'},
  {id:3, nameColumn: 'age'},
  {id:4, nameColumn: 'agemon'}
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

const InventarioScreenPublic = () => {
  const [filterValue, setFilterValue] = useState('')
  const getValue = (value) =>{
    setFilterValue(value)
  }

  const hasSearchFilter = Boolean(filterValue)
  const filteredList = useMemo(()=>{
    let filteredData = [...rows]
    
    if(hasSearchFilter){
      filteredData = filteredData.filter((row)=>
        row.lastName.toLowerCase().includes(filterValue.toLowerCase())
      )
    }
    return filteredData
  }, [filterValue])

  return (
    <div>
      <SearchInput getValue={getValue}/>
      <TableScreenPublic column={column} rows={filteredList}/>
    </div>
  )
}

export default InventarioScreenPublic