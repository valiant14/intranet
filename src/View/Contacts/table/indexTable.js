import React from 'react'
import { Row, Col, Card, Pagination } from 'react-bootstrap';
import BTable from 'react-bootstrap/Table';
import { useTable, usePagination, useGlobalFilter } from 'react-table'
import { Button } from "react-bootstrap"
import makeData from './sampleData';
import { GlobalFilter } from './GlobalFilter';

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    globalFilter,
    setGlobalFilter,
    
    // The rest of these things are super handy, too ;)

    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useGlobalFilter,
    usePagination
  )

  // Render the UI for your table
  return (
    <>
        <Row className='mb-3'>
            <Col className="d-flex align-items-center">
                Show
                <select
                    className='form-control w-auto mx-2'
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}
                >
                    {[5, 10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            {pageSize}
                        </option>
                    ))}
                </select>
                entries
            </Col>
            <Col>
                <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            </Col>
        </Row>
      <BTable striped bordered hover responsive {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps({
                    style: {
                        textAlign:'center',
                        fontSize: '14px',
                        }
                  })}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </BTable>
      <Row className='justify-content-between mt-3'>
        <Col sm={12} md={6}>
            <span className="d-flex align-items-center">
                Page{' '} <strong> {pageIndex + 1} of {pageOptions.length} </strong>{' '}
                | Go to page:{' '}
                <input
                    type="number"
                    className='form-control ml-2'
                    defaultValue={pageIndex + 1}
                    onChange={e => {
                        const page = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(page)
                    }}
                    style={{ width: '100px' }}
                />
            </span>
        </Col>
        <Col sm={12} md={6}>
            <Pagination className='justify-content-end'>
                <Pagination.First onClick={() => gotoPage(0)} disabled={!canPreviousPage} />
                <Pagination.Prev onClick={() => previousPage()} disabled={!canPreviousPage} />
                <Pagination.Next onClick={() => nextPage()} disabled={!canNextPage} />
                <Pagination.Last onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} />
            </Pagination>
        </Col>
    </Row>
    </>
  )
}

function ContactTables({items, handleShow}) {

    const isActive = () => {
        return <>
            <div className='activeCicles'></div>
        </>
    }

    const notActive = () => {
        return <>
            <div className='notCicles'></div>
        </>
    }

    const afk = () => {
        return <>
            <div className='awayThis'></div>
        </>
    }
  const columns = React.useMemo(
    () => [
          {
            Header: 'Avatar',
            accessor: value => value.avatar,
            Cell: ({ cell: { value } }) => <img src={value} className="avatarsIcon"></img>,
          },
          {
            Header: 'First Name',
            accessor: value => value.firstName,
            Cell: ({ cell: { value } }) => <span className='fname'>{value}</span>,
          },
          {
            Header: 'Last Name',
            accessor: value => value.lastName,
            Cell: ({ cell: { value } }) => <span className='fname'>{value}</span>,
          },
          {
            Header: 'Job Title',
            accessor: value => value.jobTitle,
            Cell: ({ cell: { value } }) => <span className='fname'>{value}</span>,
          },
          {
            Header: 'Department',
            accessor: value => value.department,
            Cell: ({ cell: { value } }) => <span className='fname'>{value}</span>,
          },
          {
            Header: 'Email',
            accessor: value => value.Email,
            Cell: ({ cell: { value } }) => <span className='fname'>{value}</span>,
          },
          {
            Header: 'Ext. Number',
            accessor: value => value.extNum,
            Cell: ({ cell: { value } }) => <span className='fname'>{value}</span>,
          },
          {
            Header: 'Mobile Number',
            accessor: value => value.mobileNUm,
            Cell: ({ cell: { value } }) => <span className='fname'>{value}</span>,
          },
          {
            Header: 'Status',
            accessor: value => {if(value.status === 'Active') return isActive()
            else if ( value.status === "Offline") return notActive()
            else if ( value.status === "Away") return afk()},
            Cell: ({ cell: { value } }) => <span className='fname'>{value}</span>,
          },
          {
            Header: 'Profile',
            Cell: row => (
                <div className="d-flex align-items-center">
                    <Button variant="primary" className="btn-table" onClick={e => openHandler(row.row.original)}><span>View</span></Button>
                </div>
            ),
        },


    ],
    []
  )

  const data = React.useMemo(() => items, [items])

  const openHandler = () => {
        // handleShow()
        console.log('test')
    };
    return (
        <React.Fragment>
          <Row>
              <Col>
                  <Card>
                      <Card.Header>
                          <Card.Title>
                           <h3 className='contactsTitle'>Contacts</h3> 
                          </Card.Title>
                      </Card.Header>
                      <Card.Body>
                          <Table columns={columns} data={data} />
                      </Card.Body>
                  </Card>
              </Col>
          </Row>
      </React.Fragment>
    )
}

export default ContactTables