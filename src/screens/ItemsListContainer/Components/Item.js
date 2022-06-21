//Es un componente destinado a mostrar información breve del producto que el user clickeará luego para acceder a los detalles 
//dsps busco (subir a productos)
import React from "react";

export const Item= ({nombre, precio})=>{

    return  <div> 
            <h2>{nombre}</h2>
            <p>{precio}</p>
        </div>
}

export default Item;