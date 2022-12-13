
import React, { useEffect, useState } from 'react'
import { products } from '../../products'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState ({})

    const {id} = useParams()
    console.log(id)

    useEffect ( () =>{

        const productSelected = products.find ( producto => producto.id === +id )
        setProduct(productSelected)
    },[id])
  
    return (
    <div>
        <h2>{product.nombre}</h2>
        <h2>{product.precio}</h2>
        <h2>{product.descripcion}</h2>

    </div>
  )
}

export default ItemDetailContainer