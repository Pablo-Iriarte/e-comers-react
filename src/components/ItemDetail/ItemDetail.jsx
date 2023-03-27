import React from 'react'
import { Detail } from './Detail';



export const ItemDetail = ({ products }) => {
    return (
        <>
            {
                products.map((product) => <Detail key={product.id} product={product} />)
                
            }
            
        </>
    )
}

export default ItemDetail;