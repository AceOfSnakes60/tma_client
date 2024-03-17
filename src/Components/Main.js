import { useState } from "react";
import ItemForm from "./ItemForm";
import ItemList from "./ItemList";
import OrderForm from "./OrderForm";
import OrderList from "./OrderList";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

function Main() {

    const [userRole, setUserRole] = useState('')

    const userRoleSelect = [
        {value: 0, label: "Employee"},
        {value: 1, label: "Coordinator"}
    ]

    const itemGroupsSelect = [
        { value: 0, label: "A" },
        { value: 1, label: "B" },
        { value: 2, label: "C" },
        { value: 3, label: "D" }
    ];

    const unitOfMeasurementSelect = [
        { value: 0, label: 'Number' },
        { value: 1, label: 'Meter' },
        { value: 2, label: 'Litre' },
        { value: 3, label: 'Kilograms' }
    ];
    const onChange = (e)=>{
        setUserRole(e.target.value)
        window.location.reload();
    }

    return (
        <div>
            <TextField required
                id="standard-required"
                name="Role Select"
                label="Select user Role"

                select
                value={userRole}
                onChange={e => onChange(e)}
                variant="standard" >

                {userRoleSelect.map((option) => (
                    <MenuItem value={option.value} >{option.label}</MenuItem>
                ))}

            </TextField>

            <ItemList userRole={userRole}/>
            <ItemForm userRole={userRole} itemGroupsSelect={itemGroupsSelect} unitOfMeasurementSelect={unitOfMeasurementSelect} />

            <OrderList userRole={userRole}/>
            <OrderForm userRole={userRole} unitOfMeasurementSelect={unitOfMeasurementSelect} />
        </div>
    )
}

export default Main;