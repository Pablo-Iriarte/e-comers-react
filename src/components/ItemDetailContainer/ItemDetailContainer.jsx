import React, { useEffect, useState } from 'react';
import Detail from '../ItemDetail/Detail';
import getList from "../Utils/GetList.jsx";
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {


  const [arrayList, setArrayList] = useState([])

  const { detailId } = useParams();
  //extraigo los datos de mi array con una promesa

  useEffect(() => {
    getList()
      .then((response) => setArrayList(response.find(products => products.id === parseInt(detailId))))
      .catch((err) => console.error(err))
      .finally()
  }, [detailId])


  return (

    <div>
      <Detail products={arrayList} />

    </div>
  )
}
export default ItemDetailContainer