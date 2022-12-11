import React, { useEffect, useState } from 'react'
import "./ItemListContainer.css"

import { products } from '../../products'
import ProductsCard from '../productsCard/ProductsCard'



const ItemListContainer = ( ) => {

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
    <div className='cards'>
    

    {
    items.map((element) =>{
        return (

            <div>
        
        <ProductsCard key={element.name} element={element}/>
        </div>

        )}

    )
    }
    </div>
  )
}

export default ItemListContainer