import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { DataGrid } from '@mui/x-data-grid';
import { Container, MenuList } from "@mui/material";
import TextField from '@mui/material/TextField';

function ItemList() {
  const [items, setItems] = useState(null);
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
  ];

  const onRemove = () => {

  }

  const onSelection = () => {

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
              onRowSelectionModelChange={(itm) => { onSelection(itm) }}
            />
          </div>

        ) : <div>Not available.</div>}
      </Container>
    </div>

  )
}

export default ItemList;

/*
<ul>{items.map(item=>(
    <li key={item.Id} className="list-item">
        {item.itemGroup && <div className="column">{item.itemGroup}</div>}
        {item.unitOfMeasurement && <div className="column">{item.unitOfMeasurement}</div>}
        {item.quantity && <div className="column">{item.quantity}</div>}
        {item.priceUAH && <div className="column">{item.priceUAH}</div>}
        {item.status && <div className="column">{item.status}</div>}
        {item.storageLocation && <div className="column">{item.storageLocation}</div>}
        {item.contactPerson && <div className="column">{item.contactPerson}</div>}
    </li>
))}
</ul>
*/