import { Box } from "@mui/system";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl} from "@mui/base";
import { Container, MenuList } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import axios from "axios";

const itemGroupsSelect = [
    { value: '', label: 'Select Item Group' },
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' },
    { value: 'D', label: 'D' }
];

const unitOfMeasurementSwitch = [
    { value: '', label: 'Select Unit of Measurement' },
    { value: 'Number', label: 'Number' },
    { value: 'Meter', label: 'Meter' },
    { value: 'Litre', label: 'Litre' },
    { value: 'Kilograms', label: 'Kilograms' }
];

function ItemForm() {
    const [input, setInput] = useState(
        {
            itemGroup: '',
            unitOfMeasurement: '',
            quantity: '',
            priceUAH: '',
            status: '',
            storageLocation: '',
            contactPerson: ''
        });

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setInput(prevState=>({
            ...prevState,
            [name] : value
        }));
    }

    const submit = ()=>{
        axios.post("http://localhost:8080/lists/items", input)
        .then(response=>{console.log("Item posted: ", response.data)})
        .catch(error=>{console.error("Error posting item: ", error)})
    }

    return (
        <div>
            <Container>
        <Box
        height={300}
        
        display={"flex"}
        alignItems={"center"}
            component="form"
            sx={{ '& .MuiTextField-root': { m: 2, width: '25ch' }, }}
            noValidateautoComplete="off"
        >
            <div>
                
                <TextField required
                    id="standard-required"
                    name="itemGroup"
                    label="Item Group"
                    select
                    value={input.itemGroup}
                    onChange={e=>handleChange(e)}
                    variant="standard" >
                        <MenuList>
                        {itemGroupsSelect.map((option)=>(<MenuItem value={option.value}>{option.label}</MenuItem>))}
                        </MenuList>
                    </TextField>
                <TextField required
                    id="standard-required"
                    name="unitOfMeasurement"
                    label="Unit of Measurement"

                    select
                    value={input.unitOfMeasurement}
                    onChange={e=>handleChange(e)}
                    variant="standard" >
                        <MenuList>
                        {unitOfMeasurementSwitch.map((option)=>(<MenuItem value={option.value} >{option.label}</MenuItem>))}
                        </MenuList>
                    </TextField>
                <TextField required
                    id="standard-required"
                    key="quantity"
                    label="Quantity"
                    defaultValue=""
                    variant="standard" />
                <TextField required
                    id="standard-required"
                    key="priceUAH"
                    label="Price UAH"
                    defaultValue=""
                    variant="standard" />
                <TextField required
                    id="standard"
                    key="status"
                    label="Status"
                    defaultValue=""
                    variant="standard" />
                <TextField 
                    id="standard"
                    key="storageLocation"
                    label="Storage Location"
                    defaultValue=""
                    variant="standard" />
                <TextField
                    id="standard"
                    key="contactPerson"
                    label="Contact Person"
                    defaultValue=""
                    variant="standard" />
                
            </div>
           
        </Box>
        <h4>* Required</h4>
         <Button variant="outlined" onClick={submit}>Submit</Button>
         
         </Container></div>

    )
}

export default ItemForm;