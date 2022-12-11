import React, { useEffect, useState } from 'react'

import { products } from '../../products'
import ProductsCard from '../productsCard/ProductsCard'



const ItemListContainer = ( { greeting } ) => {

    const [items, setItems] = useState([])

    useEffect ( ()=>{
        const task = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 5000);
        })
    
        task
            .then ((res)=>{setItems(res)})
            .catch ((err)=>{console.log("se rechazo")})
    }, [] )

    
    console.log(items)

  return (
    <div>
    <h2>{greeting}</h2>

    {
    items.map((element) =>{
        return (
        
        <ProductsCard key={element.name} element={element}/>

        )}

    )
    }
    </div>
  )
}

export default ItemListContainer