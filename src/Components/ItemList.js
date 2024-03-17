import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { DataGrid } from '@mui/x-data-grid';
import { Container, MenuList } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function ItemList() {
  const [items, setItems] = useState();
  const [selected, setSelected] = useState();
  useEffect(() => {
    axios.get('http://localhost:8080/lists/items')
      .then(response => {
        setItems(response.data)
        console.log(response)
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, [])

  if (selected && selected.length === 0) {
    setSelected('')
  }
  const updateButton = () => {
    return (
      <button>U</button>
    )
  }
  const deleteButton = () => {
    return (
      <button>D</button>
    )
  }
  const orderButton = () => {
    return (
      <button>O</button>
    )
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'itemGroup', headerName: 'Item Group', width: 70 },
    { field: 'unitOfMeasurement', headerName: 'Units', width: 70 },
    {
      field: 'quantity',
      headerName: 'Quantity',
      type: 'number',
      width: 90,
    },
    {
      field: 'priceUAH',
      headerName: 'Price UAH',
      width: 70,
    },
    { field: 'status', headerName: 'Status', width: 130 },
    { field: 'storageLocation', headerName: 'Storage Location', width: 130 },
    { field: 'contactPerson', headerName: 'Contact Person', width: 130 },
    {
      field: 'update',
      sortable: false,
      width: 20,
      renderCell: updateButton,
      disableClickEventBubbling: true
    },
    {
      field: 'delete',
      headerName: 'Delete',
      sortable: false,
      width: 20,
      renderCell: deleteButton,
      disableClickEventBubbling: true
    },
    {
      field: 'order',
      headerName: 'Order',
      sortable: false,
      width: 20,
      renderCell: orderButton,
      disableClickEventBubbling: true
    },
  ];

  const onRemove = () => {

    selected.forEach(element => {
      axios.delete(`http://localhost:8080/lists/items/${element}`)
        .then(response => {
          console.log("Item deleted: ", response.data)
          setSelected(prevSelected => prevSelected.filter(item => item !== element));
          window.location.reload();

        })
        .catch(error => { console.error("Error deleting item: ", error) })
    })

    //window.location.reload();

  }


  const onSelection = (ids) => {
    setSelected(ids);
    console.log(selected);

  }


  return (
    <div>
      <Container>

        {items ? (
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={items}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
              button
              onRowSelectionModelChange={(itm) => { onSelection(itm) }}
            />
          </div>

        ) : <div>Not available.</div>}
        <Button variant="outlined">Add Item</Button>
        {selected && <Button variant="outlined" onClick={onRemove}>Delete Selected</Button>}
      </Container>
    </div>

  )
}

export default ItemList;
