import { Box } from "@mui/system";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl} from "@mui/base";
import { Container, MenuList } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import axios from "axios";



function OrderForm(props){

    const unitOfMeasurementSwitch = props.unitOfMeasurementSelect;

    const [input, setInput] = useState({itemId: props.itemId})

    const handleChange = (e)=>{
        console.log(e)
        setInput(prevState=>({
            ...prevState,
            [e.target.name] : e.target.value
        }));
        console.log(input)
        
    }

    const onSubmit = ()=>{
        console.log(input)
        axios.post("http://localhost:8080/lists/orders", input)
        .then(response=>{console.log("Item posted: ", response.data)
            window.location.reload();})
        .catch(error=>{console.error("Error posting item: ", error)})
    }

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
                    name="employeeName"
                    label="Employee Name"
                    value={input.employeeName}
                    onChange={e=>handleChange(e)}
                    variant="standard" />
                <TextField required
                    id="standard-required"
                    name="unitOfMeasurement"
                    label="Unit of Measurement"
                    value={input.unitOfMeasurement}
                    onChange={e=>handleChange(e)}
                    select
                    variant="standard" >
                                                
                        {unitOfMeasurementSwitch.map((option)=>(<MenuItem value={option.value} >{option.label}</MenuItem>))}
                        
                    </TextField>
                <TextField required
                    id="standard-required"
                    label="Quantity"
                    name="quantity"
                    value={input.quantity}
                    variant="standard" />
                <TextField required
                    id="standard-required"
                    label="Price UAH"
                    name="priceUAH"
                    value={input.priceUAH}
                    onChange={e=>handleChange(e)}
                    variant="standard" />
                <TextField required
                    id="standard"
                    label="Comment"
                    name="comment"
                    value={input.comment}
                    onChange={e=>handleChange(e)}
                    variant="standard" />
                
            </div>
           
        </Box>
        <h4>* Required</h4>
         <Button variant="outlined" onClick={onSubmit}>Submit</Button>
         
         </Container></div>

    )
}

export default OrderForm;