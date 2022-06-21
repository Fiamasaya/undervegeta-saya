import React from "react";
import {useEffect} from "react";
import {useState} from "react";
import customFetch from "../../../utils/customFetch";
import productos from "../../../utils/productos";
import ItemList from "./ItemList";

export const NavBar = ()=> {
    const [Items,setItems]=useState([])

    useEffect(()=>{
        customFetch(3000,productos)
        .then(resultado=>setItems(resultado))
    }, [Items])

    return(
        <div>
            <ItemList productos={Item}/>
        </div>
    )
}

/*export const ItemListContainer = (props)=>{

    return  <>
    <div>
       <h1>{props.titulo}</h1>
    </div>
</>
}*/


