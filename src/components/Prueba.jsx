import React, {useEffect,useState} from 'react'
import{collection, doc, getDoc, getFirestore} from 'firebase/firestore'
 

export const Prueba = () => {

    const [item, setitem]=useState()

    useEffect(()=>{
        const db=getFirestore()
        const axsCollection= collection(db, 'items')
    })

    getDocs (axsCollection).then((snapshot)=>{
        if (snapshot===0){
            console.log('no hay resultados');
        }
        setitem
    })


  return (
    <div>Prueba</div>
  )
}
