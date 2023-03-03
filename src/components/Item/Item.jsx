import React from 'react'
import Count from '../Count/Count';
import './item.css'

const Item = ({ product }) => {
    const onAdd=(cantidad)=>{
        alert(`compraste ${cantidad} pares de zapatillas `);
    } 
    
    return (

        <>
            <div className="card container my-2 card-product">
                <h5 className="card-header">{product.title}</h5>

                <div className='div-card'>
                    <div>
                    <img src={product.image} className="image-product" alt="product-image" />

                    </div>

                    <div className="card-body">

                    <p className="card-text">
                       {product.description}
                    </p>

                    <a href="#" className="btn btn-dark">
                        Detalles
                    </a>
                    <Count initial={1} stock={product.stock} onAdd={onAdd}/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Item;