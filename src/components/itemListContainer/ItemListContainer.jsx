import React, { useEffect, useState } from 'react'
import "./ItemListContainer.css"

import { products } from '../../products'
import ProductsCard from '../productsCard/ProductsCard'
import { useParams } from 'react-router-dom'



const ItemListContainer = ( ) => {

    const {categoryName} = useParams()
    console.log (categoryName)

    const [items, setItems] = useState([])

    useEffect ( ()=>{

        const productosFiltered = products.filter( productos => productos.categoria === categoryName )

        const task = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(categoryName ? productosFiltered : products)
            }, 500);
        })
    
        task
            .then ((res)=>{setItems(res)})
            .catch ((err)=>{console.log("se rechazo")})
    }, [ categoryName ] )

    
    console.log(items)

  return (
    <div className='cards'>
    

    {
    items.map((element) =>{
        return (

            <div>
        
        <ProductsCard key={element.id} element={element}/>
        </div>

        )}

    )
    }
    </div>
  )
}

export default ItemListContainer