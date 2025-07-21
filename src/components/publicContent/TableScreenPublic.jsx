import { styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react'


const StyleTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        border: 'transparent',
        overflow: 'hidden',
        padding:'10px 15px'
    },
    [`&.${tableCellClasses.body}`]:{
        fontSize: 12
    },
  }))

const StyledTableRow = styled(TableRow)(({ theme }) => ({  
  '& td, & th':{
    padding: '20px 20px',
    height: '30%',
    backgroundColor: theme.palette.action.focus,
    border: 'transparent',
  },
  '& td:first-of-type': {
    borderTopLeftRadius: '16px', 
    borderBottomLeftRadius: '16px',
  },
  '& td:last-child': {
    borderTopRightRadius: '16px',
    borderBottomRightRadius: '16px',   
  },
  
}));

const TableScreenPublic = ( {column, rows} ) => {
  return (
    <Table className='tablePublic' aria-label='Inventario' sx={{padding:'5px', borderCollapse: 'separate', borderSpacing:'0 7px' }}>
      <TableHead>
        <TableRow>
          {column.map((col)=>(
            <StyleTableCell key={col.id} align={col.align}>
                {col.label}
            </StyleTableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row)=>(
          <StyledTableRow key={row.id} sx={{marginTop:'20px'}}>
            {column.map((col)=>(
                <StyleTableCell>$ {row[col.nameColumn]}</StyleTableCell>
            ))}
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  )
}
export default TableScreenPublic