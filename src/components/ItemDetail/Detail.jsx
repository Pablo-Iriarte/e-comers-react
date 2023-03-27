import React from 'react'
import './Detail.css'

export const Detail = ({ product}) => {

    return (
        <>
            <div className='container-detalle'>
                <div className="product-image">
                    <img src={product.image} alt="Producto X" />
                </div>
                <div className="product-description">
                    <h5 >{product.title}</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies, lectus eu posuere suscipit, dolor nibh bibendum purus, vitae molestie mauris tellus in tellus. Nam vel mauris faucibus, euismod elit sit amet, fermentum ipsum. Suspendisse dapibus, augue et malesuada scelerisque, odio nunc auctor turpis, ac sodales ex nibh quis ipsum. Pellentesque eget arcu in mi cursus malesuada at id arcu. Ut quis sapien lacus.</p>
                    <ul>
                        <li>Característica 1</li>
                        <li>Característica 2</li>
                        <li>Característica 3</li>
                    </ul>
                    <h2>$50.00</h2>
                    <button className='add-cart'>Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}
export default Detail;