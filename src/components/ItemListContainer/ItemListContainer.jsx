import { colors } from '@mui/material'
import React from 'react'
import { useEffect, useState } from 'react';
import styles from './ItemList.module.css'


function ItemListContainer (){
  
    const [productos, setProductos] = useState([])
    useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
    .then(response => response.json())
    .then(json => {
        setProductos(json)
    })
    .catch(error => {
    console.log("estamos teniendo errores" + error)
    })
}, [])

return (

<div className={styles.cardcontainer}>

{
    productos.map((producto) => (
        <div key={producto.id} className={styles.card} >
            <h3 className={styles.title}>{producto.title}</h3> 
            <p className={styles.description}>{producto.description}</p>
            <p className={styles.price}><strong>${producto.price}</strong></p>
        </div>
    ))
}

</div>
)
  
}

export default ItemListContainer