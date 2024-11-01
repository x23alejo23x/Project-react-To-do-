function CreateTodoButton({ onClick }) {
  return (
      <button
          onClick={onClick}
          className="w-full bg-gray-300 text-white py-2 px-4 rounded-md transition duration-300"
      >
          Crear Tarea
      </button>
  );
}
export { CreateTodoButton };
