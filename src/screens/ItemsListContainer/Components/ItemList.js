//import { useState } from "react"
import React from "react";
import Item from "./Item"

/*export const ItemList = () => {
    const [titulo, setTitulo] = useState("Hamburguesa")
    return <article>
        <h1>Hamburguesas</h1>
        <button onClick={e => setTitulo ("Hamburguesa elegida")}>Elegir</button>

    </article>
}*/

function ItemList ({productos}){
    return(
        productos.map(p=>
            <Item
            key={p.id}
            nombre={p.nombre}
            precio={p.precio}
            />
        )
    )
}

export default ItemList;
