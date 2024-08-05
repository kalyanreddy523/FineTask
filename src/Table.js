import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Profilepic from './images/profile.jpeg';

function createData(image,name, calories, fat, carbs) {
  return { image,name, calories, fat, carbs};
}

const rows = [
  createData({Profilepic},'Frozen yoghurt', 159, 6.0, 'Delivered'),
  createData('','Ice cream sandwich', 237, 9.0, 'Delivered'),
  createData('','Eclair', 262, 16.0, 'Cancelled'),
  createData('','Cupcake', 305, 3.7, 'Cancelled'),
  createData('','Gingerbread', 356, 16.0, 'Ontheway'),
  createData('','Gingerbread', 356, 16.0, 'Ontheway'),
];

function getStatusColor(status) {
    return status === 'Delivered' ? 'green' : 'whitesmoke'
  }

export default function BasicTable() {
  return (
    <TableContainer component={Paper} style={{backgroundColor: "rgb(31,32,41)"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{color:"whitesmoke",fontWeight:"bold"}}>Customer</TableCell>
            <TableCell style={{color:"whitesmoke",fontWeight:"bold"}} align="right">OrderNo</TableCell>
            <TableCell style={{color:"whitesmoke",fontWeight:"bold"}} align="right">Amount</TableCell>
            <TableCell style={{color:"whitesmoke",fontWeight:"bold"}} align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{color:"whitesmoke"}}>
                <img src={Profilepic} className='img-fluid' style={{borderRadius:"100%"}}/>
                <span style={{paddingLeft:"4px"}}>{row.name}</span>
              </TableCell>
              <TableCell style={{color:"whitesmoke"}} align="right">{row.calories}</TableCell>
              <TableCell style={{color:"whitesmoke"}} align="right">{row.fat}</TableCell>
              <TableCell style={{color:getStatusColor(row.carbs)}} align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
