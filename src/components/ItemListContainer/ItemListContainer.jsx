import { colors } from '@mui/material'
import React from 'react'
import { useEffect, useState } from 'react';
import ItemList from './iItemList';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firabese/client';
import styles from './ItemList.module.css'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ItemListContainer () {
    const [products, setProducts] = useState([]);
    const {categoria} = useParams()
    const navigate = useNavigate();

    useEffect(() => {
    const productRef = query(collection(db, "products"));

    const getProducts = async () => {

        try {
        const data = await getDocs(productRef)
        const dataFil = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        setProducts(dataFil)
        } catch (error) {
        console.log("Error al traer productos:", error)
        }
    };

    getProducts();
    }, []);


    return (
    <div>
        <ItemList products={products} /> 
    </div>
    );
}

export default ItemListContainer