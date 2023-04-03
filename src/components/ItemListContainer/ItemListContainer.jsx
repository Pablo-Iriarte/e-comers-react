import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList.jsx";
import getList from "../Utils/GetList.jsx";


export const ItemListContainer = ()=>{
    
    const[arrayList, setArrayList]= useState([])



   
   //extraigo los datos de mi array con una promesa

   useEffect(()=>{
    getList()
        .then((response)=> setArrayList(response) )
        .catch((err)=> console.error(err))
        .finally()
   }, [])

   
    return(
        <>        

        <ItemList products={arrayList}/>
           
        
        </>
    )
}

export default ItemListContainer;