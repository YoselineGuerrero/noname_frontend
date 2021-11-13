import Page from '../components/Page';
import { Box, Grid, Container, Typography, Card } from '@mui/material';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../components/_dashboard/user';
import { useState } from 'react';

import {
Table,
Stack,
Avatar,
Button,
Checkbox,
TableRow,
TableBody,
TableCell,
TableContainer,
TablePagination
} from '@mui/material';

import USERLIST from '../_mocks_/opp';

const TABLE_HEAD = [
    { id: 'id', label: 'ID', alignRight: false },
    { id: 'opportunity', label: 'Opportunity Name', alignRight: false },
    { id: 'name', label: 'Name', alignRight: false },
    { id: 'value', label: 'Value', alignRight: false },
    { id: 'status', label: 'Status', alignRight: false },
    { id: 'activity', label: 'Last Activity', alignRight: false },
    { id: '' }
  ];

//---------------------------------
function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  function applySortFilter(array, comparator, query) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    if (query) {
      return filter(
        array,
        (_user) => _user.content.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    }
    return stabilizedThis.map((el) => el[0]);
  }

export default function Opportunity() { 
    const [page, setPage] = useState(0);
    const [order, setOrder] = useState('asc');
    const [selected, setSelected] = useState([]);
    const [orderBy, setOrderBy] = useState('date');
    const [filterName, setFilterName] = useState('');
    const [rowsPerPage, setRowsPerPage] = useState(5);
  
    const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };
  
    const handleSelectAllClick = (event) => {
      if (event.target.checked) {
        const newSelecteds = USERLIST.map((n) => n.id);
        setSelected(newSelecteds);
        return;
      }
      setSelected([]);
    };
  
    const handleClick = (event, name) => {
      const selectedIndex = selected.indexOf(name);
      let newSelected = [];
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1)
        );
      }
      setSelected(newSelected);
    };
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    const handleFilterByName = (event) => {
      setFilterName(event.target.value);
    };
  
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;
  
    const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);
  
    const isUserNotFound = filteredUsers.length === 0;
    return (
    <Page title="Opportunity">
          <Container maxWidth="xl">
            <Box sx={{ pb: 5 }}>
              <Typography variant="h4">Opportunities</Typography>
            </Box>
            <Card> 
                <TableContainer sx={{ minWidth: 800 }}>
                    <Table>
                    <UserListHead
                  headLabel={TABLE_HEAD} 
                  />
                    </Table>
                </TableContainer>
            </Card>
          </Container>
    </Page>
    );
    }