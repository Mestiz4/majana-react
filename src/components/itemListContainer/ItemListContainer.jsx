import React, { useEffect, useState } from 'react'
import "./ItemListContainer.css"


import ProductsCard from '../productsCard/ProductsCard'
import { useParams } from 'react-router-dom'

import {getDocs, collection, query, where} from "firebase/firestore"
import {db} from "../../firebaseConfig"



const ItemListContainer = ( ) => {

    const {categoryName} = useParams()
    console.log (categoryName)

    const [items, setItems] = useState([])

    useEffect ( ()=>{
        

        const itemCollection = collection(db, "products")

        if( categoryName ){

            const q = query( itemCollection, where("categoria", "==", categoryName) )

            getDocs(q)
        .then((res)=> {
            const products = res.docs.map( product =>{
                return{
                    id:product.id,
                    ...product.data(),
                }
            } )

            setItems(products)
        })
        .catch((err)=> console.log(err))

        }else{
            
            getDocs(itemCollection)
        .then((res)=> {
            const products = res.docs.map( product =>{
                return{
                    id:product.id,
                    ...product.data(),
                }
            } )

            setItems(products)
        })
        .catch((err)=> console.log(err))
        }

        
    
        }, [ categoryName ] 
    
    )


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