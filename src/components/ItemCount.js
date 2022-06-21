 /*  EJEMPLO CONSIGNA CODER
function ItemCount({ stock, initial,  onAdd }) {
    // Desarrollar lógica
   }
*/

   const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial || 1)
    
    return <>
      <button>-</button>
      <p>{count}</p>
      <button>+</button>
      <button onClick = {() => onAdd(count)}>Agregar</button>
    </>
  }