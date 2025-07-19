import {  Table, TableBody, TableCell, styled, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';
import classess from './CustomDataTable.module.css'
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

const StyleTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        border: 'transparent',
        
        overflow: 'hidden',
        padding:'20px 35px',
        fontWeight: 'bold',
    },
    '&:last-of-type': {
      borderTopRightRadius: '10px',
    },
    '&:first-of-type':{
        borderTopLeftRadius: '10px',
    }
  }))

  const StyledTableRow = styled(TableRow)(() => ({  
    '& td, & th':{
        padding: '20px 20px',
        height: '30%',
        backgroundColor: '#722FF5',
        border: 'transparent',
    },
    '&:last-of-type td:last-of-type': {
    borderBottomRightRadius: '10px',
    },
    '&:last-of-type td:first-of-type': {
    borderBottomLeftRadius: '10px',
    },
}));


export const CustomDataTable = () => {
  return (
    <div className={`${classess.paperTable}`}>
        <Table className='tablePublic' aria-label='Inventario' >
            <TableHead>
                <TableRow>
                    {column.map((col)=>(
                        <StyleTableCell key={col.id} align={col.align}>
                            {col.nameColumn}
                        </StyleTableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row)=>(
                    <StyledTableRow key={row.id} >
                        {column.map((col)=>(
                            <TableCell>{row[col.nameColumn]}</TableCell>
                        ))}
                    </StyledTableRow>
                ))}
            </TableBody>
        </Table>
    </div>
    
  )
}
