import React from 'react'

import "./navbar.css"


const navbar = () => {

    return (
        <div >
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-secondary ">
                <div className="container-fluid ">
                    <a className="navbar-brand text-light fw-bolder " href="../public/index.html">Axs Calzado</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="../public/index.html">Inicio</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="../public/index.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Productos
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="../public/index.html">Hombre</a></li>
                                    <li><a className="dropdown-item" href="../public/index.html">Mujer</a></li>
                                    <li><a className="dropdown-item" href="../public/index.html">Ofertas</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="../public/index.html">Catalogo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="../public/index.html">Contacto</a>
                            </li>
                        </ul>
                    </div>
                    <div className='carrito'>
                        <a href="../public/index.html">
                        <img src="https://cdn-icons-png.flaticon.com/512/834/834526.png" alt="carrito" />
                        <span className='numero-hardcodeado'>1</span>
                        </a>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default navbar;