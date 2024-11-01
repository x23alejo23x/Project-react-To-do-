function TodoList(props){
    return(
    <div className="bg-white p-4 shadow-md rounded-md mb-4">
        <ul>
            {props.children}
        </ul>
    </div>
    );
  }
  
  export {TodoList};