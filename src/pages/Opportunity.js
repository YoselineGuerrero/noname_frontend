import Page from '../components/Page';
import { Box, Grid, Container, Typography, Card } from '@mui/material';
import { useState } from 'react';
import { filter } from 'lodash';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';
// import { sentenceCase } from 'change-case';
// import {
//   Table,
//   Stack,
//   Avatar,
//   Button,
//   Checkbox,
//   TableRow,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TablePagination
// } from '@mui/material';
// import Label from 'src/components/Label';
// import Scrollbar from 'src/components/Scrollbar';
// import SearchNotFound from 'src/components/SearchNotFound';
// import { UserListHead, UserListToolbar, UserMoreMenu } from 'src/components/_dashboard/user';

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

//--------------------------------
const itemsFromBackend = [
  { id: uuidv4(), content: 'West Airlines' },
  { id: uuidv4(), content: 'Dizon' },
  { id: uuidv4(), content: 'Vietname Airline' },
  { id: uuidv4(), content: 'Farmers Cops' },
  { id: uuidv4(), content: 'Gucci' },
  { id: uuidv4(), content: 'Home Depot' },
  { id: uuidv4(), content: 'North Tech' },
  { id: uuidv4(), content: 'Start Lords' },
  { id: uuidv4(), content: 'Hightech' },
  { id: uuidv4(), content: 'Caltech' }
];

const columnsFromBackend = {
  [uuidv4()]: {
    name: 'Researching',
    items: itemsFromBackend
  },
  [uuidv4()]: {
    name: 'Potential - Needs follow up',
    items: []
  },
  [uuidv4()]: {
    name: 'In Progress',
    items: []
  },
  [uuidv4()]: {
    name: 'Closed',
    items: []
  }
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};

//----------------------------------
export default function Opportunity() {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('date');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [columns, setColumns] = useState(columnsFromBackend);

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
        <div style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
          <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
            {Object.entries(columns).map(([columnId, column], index) => {
              return (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                  key={columnId}
                >
                  <h3>{column.name}</h3>
                  <div style={{ margin: 8 }}>
                    <Droppable droppableId={columnId} key={columnId}>
                      {(provided, snapshot) => {
                        return (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                              background: snapshot.isDraggingOver ? '#e0ebeb' : '#e0ebeb',
                              padding: 4,
                              width: 350,
                              minHeight: 500
                            }}
                          >
                            {column.items.map((item, index) => {
                              return (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                  {(provided, snapshot) => {
                                    return (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                          userSelect: 'none',
                                          padding: 18,
                                          margin: '0 0 8px 0',
                                          minHeight: '50px',
                                          backgroundColor: snapshot.isDragging
                                            ? '#00AB55'
                                            : '#00AB55',
                                          color: 'white',
                                          ...provided.draggableProps.style
                                        }}
                                      >
                                        {item.content}
                                      </div>
                                    );
                                  }}
                                </Draggable>
                              );
                            })}
                            {provided.placeholder}
                          </div>
                        );
                      }}
                    </Droppable>
                  </div>
                </div>
              );
            })}
          </DragDropContext>
        </div>
        <br />
        <Box sx={{ pb: 5 }}>
          <Card>
            <ControlledAccordions />
          </Card>
        </Box>
      </Container>
    </Page>
  );
}
//----------------------------------
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
// import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Tasktbl } from 'src/components/_dashboard/user_page';
import { Calltbl, Emailtbl } from 'src/components/_dashboard/customer_support';
import Label from 'src/components/Label';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}
function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [value, setValue] = React.useState(0);

  const handleChange_ = (event, newValue) => {
    setValue(newValue);
  };
  function find_label(text) {
    if (text === 'in progess') {
      return 'info';
    }
    if (text === 'waitlist') {
      return 'warning';
    }
    if (text === 'closed') {
      return 'success';
    }
    return 'info';
  }
  return (
    <div>
      {USERLIST.map((item) => {
        return (
          <Accordion expanded={expanded === item.id} onChange={handleChange(item.id)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '5%', flexShrink: 0 }}>#{item.id}</Typography>
              <Typography sx={{ width: '20%', flexShrink: 0 }}>{item.opportunity}</Typography>
              <Typography sx={{ width: '20%', color: 'text.secondary' }}>
                <Label>{item.value}</Label>
              </Typography>
              <Typography sx={{ width: '30%', color: 'text.secondary' }}>{item.name}</Typography>
              <Typography sx={{ width: '20%', color: 'text.secondary' }}>
                <Label color={find_label(item.status)}>{item.status}</Label>
              </Typography>
              <Typography sx={{ width: '20%', color: 'text.secondary' }}>
                {item.activity}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={value} onChange={handleChange_} aria-label="basic tabs example">
                    <Tab label="Log a call" {...a11yProps(0)} />
                    <Tab label="Emails" {...a11yProps(1)} />
                    <Tab label="Tasks" {...a11yProps(2)} />
                    <Tab label="Events" {...a11yProps(3)} />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <Calltbl />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Emailtbl />
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <Tasktbl />
                </TabPanel>
                <TabPanel value={value} index={3}>
                  Create new event
                </TabPanel>
              </Box>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
