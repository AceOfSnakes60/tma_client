import { useState } from "react";
import ItemForm from "./ItemForm";
import ItemList from "./ItemList";

function Main(){

    const [isCoordinator, setIsCoordinator] = useState(false);
    const [isEmployee, setIsEmployee] = useState(false);
    
    return(<div>
        <ItemList/>
        <ItemForm/></div>)
}

export default Main;