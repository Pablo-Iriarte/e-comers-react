import React from 'react'
import './Detail.css'
import Count from '../Count/Count';


export const Detail = ({ products}) => {


    const onAdd=(cantidad)=>{
        alert(`compraste ${cantidad} pares de zapatillas `);
    } 

    return (
        <>
            <div className='container-detalle container' >
                <div className="product-image">
                    <img src={products.image} alt="Producto X" />
                </div>
                <div className="product-description">
                    <h5 >{products.title}</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies, lectus eu posuere suscipit, dolor nibh bibendum purus, vitae molestie mauris tellus in tellus. Nam vel mauris faucibus, euismod elit sit amet, fermentum ipsum. Suspendisse dapibus, augue et malesuada scelerisque, odio nunc auctor turpis, ac sodales ex nibh quis ipsum. Pellentesque eget arcu in mi cursus malesuada at id arcu. Ut quis sapien lacus.</p>
                    <ul>
                        <li>Característica 1</li>
                        <li>Característica 2</li>
                        <li>Característica 3</li>
                    </ul>
                    <h2>$50.00</h2>
                    <Count initial={0} stock={products.stock} onAdd={onAdd}/>

                    </div>
            </div>
        </>
    )
}
export default Detail;