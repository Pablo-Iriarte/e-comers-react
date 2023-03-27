import React from 'react'
import { Link } from 'react-router-dom';
import Count from '../Count/Count';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
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
                    <img src={product.image} className="image-product" alt="el producto de nuestro catalogo" />

                    </div>

                    <div className="card-body">

                    <p className="card-text">
                       {product.description}
                    </p>

                    <Link to={'/detail'} key={product.id} props={product.id} className="btn btn-dark">
                        Detalle
                    </Link>
                    <Count initial={0} stock={product.stock} onAdd={onAdd}/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Item;