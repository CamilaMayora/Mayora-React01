import { useContext, useState } from "react"
import { ShopContext } from "../../context/ShopContext"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../firabese/client"
import styles from './Cart.module.css';


const Cart = () =>{
    const { cart, LimpiarCarrito, EliminarDelCarrito} = useContext(ShopContext)
    const [ordenNum, setOrdenNum] = useState()
    const [errorMensaje, setErrorMensaje] = useState('');
    const [client, setClient] =useState({nombre: '',
        telefono:'',
        email:''})
    
    const CrearOrden = () =>{

        if (!client.nombre || !client.telefono || !client.email) {
            setErrorMensaje("Por favor completá todos los datos.");
            setTimeout(() => setErrorMensaje(""), 4000); 
            return;
        }
        const Orden = {
            client,
            items: cart.map((item) => ({
                id: item.id,
                title: item.title,
                quantity: item.cantidad,
                price: item.price
            }))
        }
        const orderCollection = collection(db, "orders")
        addDoc(orderCollection, Orden).then(({id}) => {
            setOrdenNum(id)
            LimpiarCarrito()
        })
            .catch((e) => {
                console.error("Error guardando la orden:", e);
            })
    }

    const CambioNombre = (nombre) =>{
        setClient({...client, nombre})
    }
    const CambioTelefono = (telefono) =>{
        setClient({...client, telefono})
    }
    const CambioEmail = (email) =>{
        setClient({...client, email})
    }

    return(
        <>
            {ordenNum ? (<>
            <p 
                className={styles.mensajeExito}>Gracias por tu compra. Tu numero de orden es: #{ordenNum} 
            </p>
            </>): (
        <div  className={styles.cartContainer}>
        {cart.map((item) => (
        <div key={item.id} className={styles.cartItem}>
        <h3>{item.title}</h3>
        <p>Cantidad: {item.cantidad}</p>
        <p>Precio unitario: ${item.price}</p>
        <button onClick={() => EliminarDelCarrito(item.id)} className={styles.buttonEliminar}>Eliminar</button>
    </div>
))}
 <div className={styles.resumen}>
<p><strong>Cantidad total:</strong> {cart.reduce((acc, item) => acc + item.cantidad, 0)}</p>
<p><strong>Total general:</strong> ${cart.reduce((acc, item) => acc + item.cantidad * item.price, 0)}</p>
</div>

        <input type="text" placeholder="Nombre" onChange={(event) => CambioNombre(event.target.value)}  className={styles.inputField}/>
        <input type="number" placeholder="Telefono" onChange={(event) => CambioTelefono(event.target.value)}  className={styles.inputField} />
        <input type="email" placeholder="Email" onChange={(event) => CambioEmail(event.target.value)}  className={styles.inputField}/>
        <button onClick={() => CrearOrden()}className={styles.botonFinalizar}>Finalizar Compra</button>
        {errorMensaje && (<p  className={styles.errorMensaje}>{errorMensaje}</p>)}
        </div>
)}
</>
)
}

export default Cart