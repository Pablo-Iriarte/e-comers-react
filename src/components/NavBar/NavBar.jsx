import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidger/CartWidger'
import "./navbar.css"


const NavBar = () => {

    return (
        <>
            <nav className="bg-dark navbar navbar-expand-lg bg-body-tertiary  ">
                <div className="container-fluid  ">
                    <Link className="navbar-brand text-light fw-bolder " to="/">Axs Calzado</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav text-center ">
                            <li className="nav-item">
                                <Link className="nav-link active text-light" aria-current="page" to="/">Inicio</Link>
                                
                            </li>
                            <li className="nav-item dropdown ">
                                <Link className="nav-link dropdown-toggle text-light" to="/catalogo" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Productos
                                </Link>
                                <ul className="dropdown-menu  ">
                                    <li><Link className="dropdown-item " to="/ ">Hombre</Link></li>
                                    <li><Link className="dropdown-item " to="/">Mujer</Link></li>
                                    <li><Link className="dropdown-item " to="/">Ofertas</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to={"/catalogo"}>Catalogo</Link>
                            </li>
                            <li className="nav-item ">
                              <Link  className="nav-link text-light" to ={'/contact'}  >Contacto</Link> 
                             
                            </li>
                        </ul>
                    </div>
                    <CartWidget/>
                </div>
                
            </nav>

        </>
    )
}

export default NavBar;