import { filter } from 'lodash';
import { Icon } from '@iconify/react';
import { sentenceCase } from 'change-case';
import { useState } from 'react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination
} from '@mui/material';
// components
import Page from 'src/components/Page';
import Label from 'src/components/Label';
import Scrollbar from 'src/components/Scrollbar';
import SearchNotFound from 'src/components/SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from 'src/components/_dashboard/user';
//
const USERLIST = [
  {
    id: '#1234',
    from: 'viet@gmail.com',
    content: 'this is is just a test message',
    datetime: '5:00 pm 09/11/2021'
  },
  {
    id: '#1234',
    from: 'cong@gmail.com',
    content: 'this is is just a test message',
    datetime: '7:00 pm 12/11/2021'
  },
  {
    id: '#1234',
    from: 'nguyen@gmail.com',
    content: 'this is is just a test message',
    datetime: '6:00 pm 11/11/2021'
  },
  {
    id: '#1234',
    from: 'nguyen@gmail.com',
    content: 'this is is just a test message',
    datetime: '6:00 pm 11/11/2021'
  }
];
// status: in progess, new, resolved
// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'from', label: 'From', alignRight: false },
  { id: 'content', label: 'Content', alignRight: false },
  { id: 'datetime', label: 'Date', alignRight: false },
  // { id: 'isVerified', label: 'Verified', alignRight: false },
  // { id: 'status', label: 'Status', alignRight: false },
  { id: '' }
];

// ----------------------------------------------------------------------

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

export default function User() {
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
  function view_gmail() {
    window.open('https://mail.google.com/mail/u/0/?tab=rm&ogbl', '-_blank');
  }
  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
        <Typography variant="h4" gutterBottom>
          Email
        </Typography>
        <div>
          <Button
            variant="contained"
            component={RouterLink}
            to="#"
            startIcon={<Icon icon={plusFill} />}
          >
            Send email
          </Button>
          <Button style={{ marginLeft: ' 5px' }} variant="contained" onClick={view_gmail}>
            View in gmail
          </Button>
        </div>
      </Stack>

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
                    // const { id, name, role, status, company, avatarUrl, isVerified } = row;
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
                        {/* <TableCell component="th" scope="row" padding="none">
                          <Stack direction="row" alignItems="center" spacing={2}>
                            <Avatar alt={name} src={avatarUrl} />
                            <Typography variant="subtitle2" noWrap>
                              {name}
                            </Typography>
                          </Stack>
                        </TableCell> */}
                        <TableCell align="left">{row.from}</TableCell>
                        <TableCell align="left">{row.content}</TableCell>
                        {/* <TableCell align="left">{isVerified ? 'Yes' : 'No'}</TableCell> */}
                        {/* <TableCell align="left">
                          <Label
                            variant="ghost"
                            color={(row.status === 'banned' && 'error') || 'success'}
                          >
                            {row.status}
                          </Label>
                        </TableCell> */}
                        <TableCell align="left">{row.datetime}</TableCell>

                        {/* <TableCell align="right">
                          <UserMoreMenu />
                        </TableCell> */}

                        <TableCell align="left">
                          <Button>view</Button>
                        </TableCell>
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
    </>
  );
}
