import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import {db} from "../../firebaseConfig"

const Form = ({cart, getTotalPrice}) => {

  const [userData, setUserData] = useState ({name: "", phone: "", email: ""})

  const total =getTotalPrice()


    const handleSubmit = ( event ) =>{

        event.preventDefault()

        const order ={
          buyer: userData,
          items: cart,
          total:total
        }

        const orderCollection = collection(db, "orders")

        addDoc(orderCollection, order)


    }

    


  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='Ingrese su nombre' 
            name='name' 
            onChange= { (event) => setUserData( { ...userData, name: event.target.value } )} 
            value={userData.name} 
            />
            <input 
            type="text" 
            placeholder='Ingrese su telefono' 
            name= 'phone' 
            onChange={(event) => setUserData( {...userData, phone: event.target.value} )} 
            value={userData.phone} 
            />
            <input 
            type="text" 
            placeholder='Ingrese su email' 
            name= 'email' 
            onChange={(event) => setUserData( {...userData, email: event.target.value} )} 
            value={userData.email} 
            />
            <button type="submit">Finalizar compra</button>
        </form>
    </div>
  )
}

export default Form