import React from 'react'
import CustomButton from '../customButton/CustomButton'

const ItemListContainer = ( { greeting } ) => {
  return (
    <div>
    <h2>{greeting}</h2>
    <CustomButton />
    </div>
  )
}

export default ItemListContainer