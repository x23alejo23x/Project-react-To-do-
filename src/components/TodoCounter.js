function TodoCounter({total, completed}){
    return(
     <h1 className="text-2x1 font-semibold text-center mb-4">
         Completado {completed} de {total} 
     </h1>
    );
  }
  
  export {TodoCounter};