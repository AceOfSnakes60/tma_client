import { Box } from "@mui/system";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl} from "@mui/base";
import { Container, MenuList } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';

const unitOfMeasurementSwitch = [
    {
        value: 0,
        label: "Number"
    },
    {
        value: 1,
        label: "Meter"
    },
    {
        value: 2,
        label: "Litre"
    },
    {
        value: 3,
        label: "Kilograms"
    }
]

function OrderForm(){
    return(
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
                    label="Employee Name"
                    defaultValue=""
                    variant="standard" />
                <TextField required
                    id="standard-required"
                    label="Unit of Measurement"
                    defaultValue=""
                    select
                    variant="standard" >
                                                <MenuList>
                        {unitOfMeasurementSwitch.map((option)=>(<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}
                        </MenuList>
                    </TextField>
                <TextField required
                    id="standard-required"
                    label="Quantity"
                    defaultValue=""
                    variant="standard" />
                <TextField required
                    id="standard-required"
                    label="Price UAH"
                    defaultValue=""
                    variant="standard" />
                <TextField required
                    id="standard"
                    label="Comment"
                    defaultValue=""
                    variant="standard" />
                
            </div>
           
        </Box>
        <h4>* Required</h4>
         <Button variant="outlined">Submit</Button>
         
         </Container></div>

    )
}

export default OrderForm;