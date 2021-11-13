import Page from '../components/Page';
import { Box, Grid, Container, Typography, Card } from '@mui/material';
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
import Label from 'src/components/Label';
import Scrollbar from 'src/components/Scrollbar';
import SearchNotFound from 'src/components/SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from 'src/components/_dashboard/user';

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
    function find_color(text) {
        if (text === 'in-progress') {
          return 'info';
        }
        if (text === 'waitlist') {
          return 'warning';
        }
        return 'info';
      }
    return (
    <Page title="Opportunity">
          <Container maxWidth="xl">
            <Box sx={{ pb: 5 }}>
              <Typography variant="h4">Opportunities</Typography>
            </Box>
            <Card>
        <UserListToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
        />

        <Scrollbar>
          <TableContainer sx={{ minWidth: 800 }}>
            <Table>
              <UserListHead
                order={order}
                orderBy={orderBy}
                headLabel={TABLE_HEAD}
                rowCount={USERLIST.length}
                numSelected={selected.length}
                onRequestSort={handleRequestSort}
                onSelectAllClick={handleSelectAllClick}
              />
              <TableBody>
                {filteredUsers
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    const {
                        id,
                        opportunity,
                        name,
                        value,
                        status,
                        activity,
                      } = row;
                    const isItemSelected = selected.indexOf(row.id) !== -1;

                    return (
                      <TableRow
                        hover
                        key={row.id}
                        tabIndex={-1}
                        role="checkbox"
                        selected={isItemSelected}
                        aria-checked={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            onChange={(event) => handleClick(event, row.id)}
                          />
                        </TableCell>

                        <TableCell align="left">{row.id}</TableCell>
                        <TableCell align="left">{row.opportunity}</TableCell>
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="left">{row.value}</TableCell>
                        <TableCell align="left">
                          <Label variant="ghost" color={find_color(row.status)}>
                            {row.status}
                          </Label>
                        </TableCell>
                        <TableCell align="left">{row.activity}</TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              {isUserNotFound && (
                <TableBody>
                  <TableRow>
                    <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                      <SearchNotFound searchQuery={filterName} />
                    </TableCell>
                  </TableRow>
                </TableBody>
              )}
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={USERLIST.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
          </Container>
    </Page>
    );
    }