import React, { useState } from 'react'

import { products } from '../../products'



const ItemListContainer = ( { greeting } ) => {

    const [items, setItems] = useState(0)

    const task = new Promise((resolve, reject) => {
        resolve(products)
    })

    task
        .then ((res)=>{console.log(res)})
        .catch ((err)=>{console.log("se rechazo")})

    console.log(products)

  return (
    <div>
    <h2>{greeting}</h2>
    
    </div>
  )
}

export default ItemListContainer