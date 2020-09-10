import React, { Component } from "react";

class MiComponente extends Component{

   render(){
     let receta = {
       nombre: 'Pizza',
       ingredientes:['tomate', 'queso', 'jamon'],
       calorias: 400
     };
     return (
       <div className="mi-componente">
          <h1> {receta.nombre} </h1>
          <h2> { 'calorias' + receta.calorias} </h2>
          <ol>
           {
             receta.ingredientes.map((ingrediente , i) => {
               console.log(ingrediente);
               return(
                 <li key={i}>
                    {ingrediente}
                 </li>
               );
             })
           }
           </ol>
       </div>
     );
   }
}

export default MiComponente;