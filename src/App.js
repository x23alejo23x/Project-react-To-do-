import React, { useState } from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';

function App() {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTodoText, setNewTodoText] = useState('');

  // Agregar tarea
  const addTodo = () => {
    if (newTodoText.trim()) {
      setTodos([...todos, { text: newTodoText, completed: false }]);
      setNewTodoText('');
      setIsModalOpen(false);
    }
  };

  // Marcar tarea como completada
  const completeTodo = (text) => {
    setTodos(todos.map(todo =>
      todo.text === text ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Eliminar tarea
  const deleteTodo = (text) => {
    setTodos(todos.filter(todo => todo.text !== text));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-t from-gray-200 to-gray-300">
      <div className="flex gap-8 w-full max-w-4xl">
        
        {/* Columna izquierda */}
        <div className="w-1/2 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-5xl font-bold text-center mb-6 text-blue-600">New Tasks</h2>
          <CreateTodoButton onClick={() => setIsModalOpen(true)} />
          <img
            src="/assets/joju.png" 
            alt="Descripción de la imagen"
            className="w-full mt-4 rounded-md"
          />

          {/* Modal para crear tarea */}
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
              <div className="bg-white p-6 rounded-md shadow-md w-1/2">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">Crear Tarea</h3>
                <input
                  type="text"
                  value={newTodoText}
                  onChange={(e) => setNewTodoText(e.target.value)}
                  placeholder="Nueva tarea"
                  className="w-full p-2 border rounded-md mb-4"
                />
                <button 
                  onClick={addTodo}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md"
                >
                  Añadir
                </button>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="ml-2 bg-red-500 text-white py-2 px-4 rounded-md"
                >
                  Cancelar
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Columna derecha */}
        <div className="w-1/2 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-5xl font-bold text-center mb-6 text-blue-600">Your Tasks</h2>
          <TodoCounter 
            completed={todos.filter(todo => todo.completed).length}
            total={todos.length}
          />

          {/* Contenedor de tareas con tamaño fijo y scroll */}
          <div className="h-80 overflow-y-auto">
            <TodoList>
              {todos.map((todo) => (
                <TodoItem
                  key={todo.text}
                  Text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}
            </TodoList>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
