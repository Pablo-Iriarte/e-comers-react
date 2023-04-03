import React from 'react'
import { Link } from 'react-router-dom';
import './item.css'

const Item = ({ product }) => {
    
    
    return ( 

        <>
            <div className="card container my-2 card-product">
                <h5 className="card-header">{product.title}</h5>

                <div className='div-card'>
                    <div>
                    <img src={product.image} className="image-product" alt="el producto de nuestro catalogo" />

                    </div>

                    <div className="card-body ">

                    <p className="card-text  ">
                       {product.description}
                    </p>

                    <Link to={`/detail/${product.id}`} key={product.id} props={product.id} className="btn btn-dark">
                        Detalle
                    </Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Item;