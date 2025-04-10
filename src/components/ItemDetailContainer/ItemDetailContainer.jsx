import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"; 
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firabese/client";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState();


    useEffect(() => {
    const getProduct = async () => {
        try {
        const productRef = doc(db, "products", id);
        const snapshot = await getDoc(productRef);

        if (snapshot.exists()) {
            const productData = { id: snapshot.id, ...snapshot.data() };
            setProduct(productData);
        }
        } catch (error) {
        console.error("Error product:", error);
        }
    };

    getProduct();
    }, [id]);



    return <ItemDetail producto={product} />;
};

export default ItemDetailContainer;






















