import React from "react";

import { ItemListContainer } from "./ItemListContainer";

export const Main= () =>{
    return(
        <main>
           < ItemListContainer greeting={"Aun no hay productos cargados..."}/>
        </main>
    )
}