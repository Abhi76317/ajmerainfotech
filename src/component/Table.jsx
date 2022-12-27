import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';

export default function BasicTable() {
  const data = useSelector((state) => state.userState.users);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">{ }</TableCell>
            <TableCell align="center">id</TableCell>
            <TableCell align="center">name</TableCell>
            <TableCell align="center">email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.data && data.data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" style={{ padding: '0' }}>
                <img width="60" src={row.avatar} alt="" />
              </TableCell>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">
                {row.first_name}
                {' '}
                {row.last_name}
              </TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}