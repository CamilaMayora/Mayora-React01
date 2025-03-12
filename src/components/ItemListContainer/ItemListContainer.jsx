import { colors } from '@mui/material'
import React from 'react'
import { useEffect, useState } from 'react';
import ItemList from './iItemList';
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
    <ItemList productos={productos} />
)
  
}

export default ItemListContainer