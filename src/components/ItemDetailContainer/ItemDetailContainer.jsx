import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import getList from "../Utils/GetList.jsx";


export const ItemDetailContainer = () => {

  
    const[arrayList, setArrayList]= useState([])


   //extraigo los datos de mi array con una promesa

   useEffect(()=>{
    getList()
        .then((response)=> setArrayList(response) )
        .catch((err)=> console.error(err))
        .finally()
   }, [])

  
    return (

    <div>
        <ItemDetail products={arrayList}/>
    </div>
  )
}
export default ItemDetailContainer