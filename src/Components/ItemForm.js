import { Box } from "@mui/system";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl} from "@mui/base";
import { Container, MenuList } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import axios from "axios";



function ItemForm() {
    const itemGroupsSelect = [
        {value: 0, label: "A" },
        {value: 1, label: "B" },
        {value: 2, label: "C" },
        {value: 3, label: "D" } 
    ];
    
    const unitOfMeasurementSwitch = [
        { value: 0, label: 'Number' },
        { value: 1, label: 'Meter' },
        { value: 2, label: 'Litre' },
        { value: 3, label: 'Kilograms' }
    ];
    const [input, setInput] = useState('')
        /*{
            itemGroup: "A",
            unitOfMeasurement: '',
            quantity: '',
            priceUAH: '',
            status: '',
            storageLocation: '',
            contactPerson: ''
        });*/


    const handleChange = (e)=>{
        //const {name, value} = e.target;
        console.log(e)
        setInput(prevState=>({
            ...prevState,
            [e.target.name] : e.target.value
        }));
        console.log(input)
        
    }


    const submit = ()=>{
        console.log(input)
        axios.post("http://localhost:8080/lists/items", input)
        .then(response=>{console.log("Item posted: ", response.data)
            window.location.reload();})
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
                        
                        {itemGroupsSelect.map((option)=>(
                        <MenuItem value={option.value} >{option.label}</MenuItem>
                        ))}
                        
                    </TextField>
                <TextField required
                    id="standard-required"
                    name="unitOfMeasurement"
                    label="Unit of Measurement"

                    select
                    defaultValue={unitOfMeasurementSwitch[0].value}
                    onChange={e=>handleChange(e)}
                    variant="standard" >
                        
                        {unitOfMeasurementSwitch.map((option)=>(
                        <MenuItem value={option.value} >{option.label}</MenuItem>
                        ))}
                        
                    </TextField>
                <TextField required
                    id="standard-required"
                    name="quantity"
                    label="Quantity"
                    onChange={e=>handleChange(e)}
                    value={input.quantity}
                    variant="standard" />
                <TextField required
                    id="standard-required"
                    name="priceUAH"
                    label="Price UAH"
                    onChange={e=>handleChange(e)}
                    value={input.priceUAH}
                    variant="standard" />
                <TextField required
                    id="standard"
                    name="status"
                    label="Status"
                    onChange={e=>handleChange(e)}
                    defaultValue=""
                    variant="standard" />
                <TextField 
                    id="standard"
                    name="storageLocation"
                    label="Storage Location"
                    value={input.storageLocation}
                    onChange={e=>handleChange(e)}
                    variant="standard" />
                <TextField
                    id="standard"
                    name="contactPerson"
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