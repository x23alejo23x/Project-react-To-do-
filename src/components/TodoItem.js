import React from 'react';

function TodoItem(props) {
    return (
        <li className="flex items-center justify-between p-3 bg-gray-100 rounded-md mb-2 shadow-sm">
            {/* Icono de completado */}
            <span
                className={`cursor-pointer text-lg ${
                    props.completed ? 'text-green-500' : 'text-gray-400'
                }`}
                onClick={props.onComplete}
            >
                {props.completed ? '✔️' : '⭕'}
            </span>

            {/* Texto de la tarea */}
            <p className={`flex-grow px-4 ${props.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                {props.Text}
            </p>

            {/* Botón de eliminación */}
            <span
                className="text-red-500 cursor-pointer hover:text-red-700"
                onClick={props.onDelete}
            >
                ❌
            </span>
        </li>
    );
}

export { TodoItem };
